import re
import base64

html_path = r"c:\Users\syed.mfuaad\Downloads\robot_animated.html"
output_image_path = r"c:\Users\syed.mfuaad\Downloads\Pivot2Tech\src\assets\robot_head.png"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for the base64 source string
match = re.search(r"data:image/png;base64,([A-Za-z0-9+/=]+)", content)
if match:
    b64_data = match.group(1)
    image_bytes = base64.b64decode(b64_data)
    with open(output_image_path, "wb") as out_f:
        out_f.write(image_bytes)
    print("Success: Robot head image extracted and saved!")
else:
    print("Error: Could not find base64 image in HTML.")
