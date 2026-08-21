import json
from googleapiclient.discovery import build
from google.oauth2 import service_account

def generate_tech_tree_data(data):
    nodes = []
    edges = []
    node_id_map = {}  # Maps label to ID
    current_id = 1    # Start ID counter

    # Generate tech nodes
    for index, row in enumerate(data, start=1):
        tech_node = {
            "id": current_id,
            "label": row["label"],
            "group": row["era"],
            "tier": int(row["tier"]),
            "height": int(row["height"]),
            "shape": "box",
            "description": row.get("description", ""),
            "x": int(row["tier"]) * 200,
            "y": int(row["height"]) * 60,
            "font": {"size": 14}  # Font size for tech nodes
        }
        nodes.append(tech_node)
        node_id_map[row["label"]] = current_id
        current_id += 1
        x_offset = len("label") * 4 # Start offset from the end of the tech node

        # Add buildings as square nodes
        buildings = row.get("buildings", "")
        if buildings:
            building_labels = [b.strip() for b in row["buildings"].split(",")]
            for building_label in building_labels:
                building_node = {
                    "id": current_id,
                    "label": building_label,
                    "font-size": 1,
                    "group": row["era"],
                    "shape": "box",
                    "margin": {"top": 4},
                    "size": 6,  # Smaller size for buildings
                    "x": int(row["tier"]) * 200 + x_offset,
                    "y": int(row["height"]) * 60 + 11,  # Position below tech node
                    "font": {"size": 4.5}  # Smaller font size for buildings
                }
                nodes.append(building_node)
                current_id += 1

                # Calculate the next x_offset based on the length of the building label
                x_offset -= 10 + len(building_label) * 1.8

        # Add bonuses as circle nodes
        bonuses = row.get("bonuses", "")
        if bonuses:
            bonus_labels = [b.strip() for b in row["bonuses"].split(",")]
            bonus_id = 0
            for bonus_label in bonus_labels:
                bonus_node = {
                    "id": current_id,
                    "label": bonus_label,
                    "group": row["era"],
                    "shape": "eclipse",
                    "margin": {"top": 4},
                    "size": 6,  # Smaller size for buildings
                    "x": int(row["tier"]) * 200 + x_offset,
                    "y": int(row["height"]) * 60 + 11,  # Position below tech node
                    "font": {"size": 4.5}  # Smaller font size for buildings
                }
                nodes.append(bonus_node)
                current_id += 1

                # Calculate the next x_offset based on the length of the building label
                x_offset -= 10 + len(bonus_labels) * 1.5

    # Generate edges from 'req' (requirements)
    for row in data:
        current_label = row["label"]
        req = row.get("req", "")
        if req:
            required_labels = [r.strip() for r in req.split(",")]
            for req_label in required_labels:
                if req_label in node_id_map:
                    edges.append({
                        "from": node_id_map[req_label],
                        "to": node_id_map[current_label]
                    })
                else:
                    print(f"  Warning: {req_label} not found in node_id_map")

    return nodes, edges

# Set up credentials
credentials = service_account.Credentials.from_service_account_file(
    "C:/Users/Edvin/Documents/GoogleAPI/GoogleAPI.json",
    scopes=['https://www.googleapis.com/auth/spreadsheets.readonly']
)
service = build('sheets', 'v4', credentials=credentials)

# Define the sheets and their ranges
sheets = [
    {"name": "Tech Tree", "range": "Tech Tree!A1:K100"},
    {"name": "Civic Tree", "range": "Civic Tree!A1:K100"},
    {"name": "Prosper Tech Tree", "range": "Prosper Tech Tree!A1:K100"},
    {"name": "City State Tech Tree", "range": "City State Tech Tree!A1:K100"},
]

# Fetch data for each sheet and save as JSON
for sheet in sheets:
    sheet_name = sheet["name"]
    range_name = sheet["range"]

    result = service.spreadsheets().values().get(
        spreadsheetId='1_IM2NWTvg_QWiCrJ05CV-eECm4g4RtxG4f5CTrrWIuM',
        range=range_name
    ).execute()

    values = result.get('values', [])
    headers = values[0]
    rows = values[1:]
    data = [dict(zip(headers, row)) for row in rows]

    # Generate nodes and edges
    nodes, edges = generate_tech_tree_data(data)

    # Save as JSON with the sheet name as the filename
    filename = f"{sheet_name.replace(' ', '_').lower()}_data.json"
    with open(filename, 'w') as f:
        json.dump({"nodes": nodes, "edges": edges}, f, indent=2)

    print(f"Saved {sheet_name} data to {filename}")
