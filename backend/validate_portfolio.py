"""
Portfolio Verification & Asset Integrity Tool
Managed via uv (`uv run python validate_portfolio.py`)
Validates that declared project assets, images, and resume files exist in the public directory.
"""
from pathlib import Path
from pydantic import BaseModel, HttpUrl
from typing import List, Optional

class ProjectEntry(BaseModel):
    id: str
    title: str
    image: str
    technologies: List[str]
    github_url: Optional[str] = None
    live_demo_url: Optional[str] = None

def verify_assets():
    root = Path(__file__).resolve().parent.parent
    public_dir = root / "public"
    
    print(f"[*] Validating portfolio assets in: {public_dir}")
    
    essential_files = [
        "images/profile/hero-portrait-cutout.png",
        "images/profile/hero-portrait-studio.jpg",
        "images/laptop-mockup.svg",
        "resume/Arvind_S_Resume.pdf",
    ]
    
    missing = []
    for rel_path in essential_files:
        full_path = public_dir / rel_path
        if full_path.exists():
            print(f"  [OK] Found: {rel_path}")
        else:
            print(f"  [MISSING] {rel_path}")
            missing.append(rel_path)
            
    if missing:
        print(f"\n[WARNING] {len(missing)} asset(s) not found.")
        return False
    
    print("\n[SUCCESS] All essential portfolio assets verified successfully.")
    return True

if __name__ == "__main__":
    verify_assets()

