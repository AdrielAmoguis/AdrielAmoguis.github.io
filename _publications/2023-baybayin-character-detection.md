---
title: "Baybayin Character Instance Detection"
authors: ["Adriel Isaiah V. Amoguis", "Gian Joseph B. Madrid", "Benito Miguel D. Flores IV", "Macario O. Cordel II"]
venue: "arXiv"
year: 2023
type: "Preprint"
status: "Published"
abstract: "This paper presents a novel approach to character instance detection for Baybayin, an ancient Filipino script. We developed a deep learning model that can accurately identify and segment individual Baybayin characters from historical documents, providing a foundation for digital preservation and analysis of this important cultural heritage."
pdf_url: "/assets/files/baybayin-detection.pdf"
arxiv_id: "2304.09469"
doi: ""
bibtex: "@misc{amoguis2023baybayin,\n  title = {Baybayin Character Instance Detection},\n  author = {Amoguis, Adriel Isaiah V. and Madrid, Gian Joseph B. and IV, Benito Miguel D. Flores and II, Macario O. Cordel},\n  year = {2023},\n  eprint = {2304.09469},\n  archivePrefix = {arXiv},\n  primaryClass = {cs.CV},\n}"
citation_count: 5
featured: true
---

# Baybayin Character Instance Detection

## Abstract

This paper presents a novel approach to character instance detection for Baybayin, an ancient Filipino script. We developed a deep learning model that can accurately identify and segment individual Baybayin characters from historical documents, providing a foundation for digital preservation and analysis of this important cultural heritage.

## Methodology

### Dataset Collection
We collected and annotated a comprehensive dataset of historical Baybayin documents from various sources:
- **Historical Manuscripts**: Scanned documents from Philippine archives
- **Digital Transcriptions**: Verified text samples from linguistic experts
- **Synthetic Data**: Generated samples to augment training

### Model Architecture
Our approach uses a modified YOLOv5 architecture with the following key innovations:
- **Multi-scale Feature Extraction**: Captures characters at different resolutions
- **Attention Mechanism**: Focuses on relevant character features
- **Cultural Context Integration**: Incorporates historical writing conventions

## Results

### Performance Metrics
- **Precision**: 0.94
- **Recall**: 0.89
- **F1-Score**: 0.91
- **Inference Speed**: 15ms per character

### Qualitative Analysis
The model successfully handles:
- **Character Variations**: Different writing styles across historical periods
- **Document Degradation**: Works with aged and damaged manuscripts
- **Writing Conventions**: Respects traditional Baybayin stroke order

## Applications

### Digital Preservation
- **Archive Digitization**: Automated transcription of historical documents
- **Cultural Heritage**: Preservation of endangered writing systems
- **Educational Tools**: Interactive learning platforms for Baybayin

### Technical Implementation
```python
# Model inference example
import torch
from PIL import Image
import torchvision.transforms as transforms

# Load trained model
model = torch.load('baybayin_detector.pth')

# Process document image
image = Image.open('historical_document.jpg')
transform = transforms.Compose([
    transforms.Resize((640, 640)),
    transforms.ToTensor(),
])

input_tensor = transform(image).unsqueeze(0)

# Detect characters
with torch.no_grad():
    predictions = model(input_tensor)
    detections = non_max_suppression(predictions, conf_threshold=0.5)
```

## Future Work

- **Extended Character Set**: Include regional Baybayin variants
- **3D Document Analysis**: Handle curved and folded pages
- **Real-time Recognition**: Mobile applications for field work
- **Cross-script Transfer**: Adapt methodology for other Philippine scripts

## Citation

```bibtex
@misc{amoguis2023baybayin,
  title = {Baybayin Character Instance Detection},
  author = {Amoguis, Adriel Isaiah V. and Madrid, Gian Joseph B. and IV, Benito Miguel D. Flores and II, Macario O. Cordel},
  year = {2023},
  eprint = {2304.09469},
  archivePrefix = {arXiv},
  primaryClass = {cs.CV},
}
```

---

*Tags: computer vision, deep learning, cultural heritage, OCR, baybayin*