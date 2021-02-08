
detect_py = '/home/haresrv/Downloads/7th Sem/Project/Microcontroller Detection/ZigZag/detect.py';
weights = '/home/haresrv/Downloads/7th Sem/Project/Microcontroller Detection/ZigZag/checkpoints/yolov4-tiny-416';
img = '/home/haresrv/Downloads/7th Sem/Project/OBD/object_recognition_detection/box_0.jpg';

bashCommand = ["python",detect_py,"--weights",weights,"--size","416","--model","yolov4","--image",img];
import subprocess
process = subprocess.Popen(bashCommand, stdout=subprocess.PIPE)
output, error = process.communicate()
print(bashCommand)
