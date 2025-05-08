import os
import webbrowser

# Define PDF file path (Modify this for your system)
pdf_file_path = "file:///C:/Users/Binuzz/Desktop/chemistryfirstsemester.pdf"

# 1️⃣ Check if the PDF file exists
if os.path.exists("C:/Users/Binuzz/Desktop/dev.pdf"):
    print(f"✅ PDF file exists: {pdf_file_path}")
    # 2️⃣ Open the PDF file with the default system viewer
    try:
        webbrowser.open(pdf_file_path)  # Opens in the default PDF viewer
        print("🚀 PDF file opened successfully!")
    except Exception as e:
        print(f"⚠️ Could not open PDF file: {e}")
else:
    print(f"❌ PDF file not found at: {pdf_file_path}")
