FROM tensorflow/tensorflow
ADD . /
RUN apt-get update
RUN DEBIAN_FRONTEND="noninteractive"  apt-get install -y python3-opencv
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["detector_app.py"]