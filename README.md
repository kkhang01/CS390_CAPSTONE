Parking detection using deep learning with yolov5

NOTE: Development has stopped indefinitely, but is free to be worked on by others if they want to.

This project deals with using deep learning models in order to detect cars and empty parking lot spaces with given images or video. It is mainly focused on parameters fitting with parking lots in St. Olaf College.

This project is dependent on yolov5. https://github.com/ultralytics/yolov5
Follow the link and follow instructions on cloning and installing the yolov5 repo.
After the tutorial, put best.pt (our model) in the main yolov5 directory

some main commands to play with or to edit our model are:

 python detect.py --weights best.pt --source <picture directory> - lets you test the model by imputting a source such as a picture on local drive, a video, or a youtube link

 python train.py --img 600 --epochs 100 --data data.yaml --weights best.pt - lets you train/improve the model with your own custom dataset. set image number and epoch according to your own dataset parameters.

