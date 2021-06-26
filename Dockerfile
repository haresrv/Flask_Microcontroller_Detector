FROM tensorflow/tensorflow
ADD . /
RUN apt-get update
RUN DEBIAN_FRONTEND="noninteractive"  apt-get install -y python3-opencv
RUN pip install flask flask_wtf Pillow opencv-python matplotlib
EXPOSE 8000
ENTRYPOINT ["python"]
CMD ["detector_app.py"]