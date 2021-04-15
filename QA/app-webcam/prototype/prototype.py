import numpy as np
import cv2
from collections import deque

cap = cv2.VideoCapture(0)
queue = deque()
NB_FRAMES_DELAY = int(30/5)

while (True):

    # Capture and create a buffer for the delayed stream
    ret, frame = cap.read()
    queue.append(frame)

    # Delayed by a number of frame...
    # To get the proper latency, got to vary number of delayed frame and frame per seconds
    if len(queue) >= NB_FRAMES_DELAY:
        frame_latent = queue.popleft()
    else:
        frame_latent = frame
    assert len(queue) < NB_FRAMES_DELAY


    # Display frame, frame latent side by side
    result_image = np.hstack((frame, frame_latent))

    # Add FPS display
    font = cv2.FONT_HERSHEY_SIMPLEX
    fps = cap.get(cv2.CAP_PROP_FPS)
    cv2.putText(result_image,
                'FPS : {}'.format(fps),
                (30, 50),
                font,
                0.7,
                (0, 0, 0))

    # Update the image shown
    cv2.imshow('frame', result_image)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
