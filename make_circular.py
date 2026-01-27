from PIL import Image, ImageOps, ImageDraw

def make_circular(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        
        # Create a circular mask
        mask = Image.new("L", img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + img.size, fill=255)
        
        # Apply the mask
        result = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
        result.putalpha(mask)
        
        # Save results
        result.save(output_path)
        print(f"Successfully saved circular image to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    make_circular("public/satyah-logo.png", "public/satyah-logo-circle.png")
