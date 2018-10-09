```
import numpy as np
from display import *

INTER_TIME = 1200


def sign(w, data):
    num = np.dot(w.T, data)
    if num > 0:
        return 1
    return -1


def update_w(w, data, id):
    pred = sign(w, data)
    if pred == id:
        return w
    else:
        print 'w changed from ', w, ' to ',
        w = w + id * data
    return w


def train_w(w, data_set, ids):
    for t in range(0, INTER_TIME):
        print 'iteration = ', t
        idx = t % len(data_set)
        w = update_w(w, data_set[idx], ids[idx])
    return w


if __name__ == '__main__':
    # Read data from file
    data_X=[]
    data_Y=[]
    x=0
    w0=-1
    f=open("hw1_15_train.txt",'r')
    for line in f:
        y=line.split()
        y=list(map(float,y))
        data_X.append(y[0:3])
        data_Y.append(y[4])
        x+=1
    f.close

    data_set = np.array(data_X)
    ids = data_Y

    w = np.array([0, 0, 0])
    w = train_w(w, data_set, ids)
```


---


```

import numpy as np
import random

INTER_TIME = 1200


def sign(w, data):
    num = np.dot(w.T, data)
    if num > 0:
        return 1
    return -1


def update_w(w, data, id):
    pred = sign(w, data)
    if pred == id:
        return w
    else:
        w = w + id * data
    return w


def error_w(w, data_set, ids):
    err_num = 0
    for idx in range(0, len(data_set)):
        pred = sign(w, data_set[idx])
        if pred != ids[idx]:
            err_num += 1
    return err_num

def train_w(w, data_set, ids):
    w_optional = w
    error_w_o = error_w(w, data_set, ids)
    for t in range(0, INTER_TIME):
        print 'iteration = ', t
        idx = random.randint(0, len(data_set) - 1)
        w = update_w(w, data_set[idx], ids[idx])
        error_w_c = error_w(w, data_set, ids)
        if error_w_c < error_w_o:
            print 'w changed from ', w_optional, ' to ', w
            w_optional = w
            error_w_o = error_w_c

    return w_optional
if __name__ == '__main__':


    data_X=[]
    data_Y=[]
    x=0
    w0=-1
    f=open("train_data.txt",'r')
    for line in f:
        y=line.split()
        y=list(map(float,y))
        data_X.append(y[0:3])
        data_Y.append(y[4])
        x+=1
    f.close

    data_set = np.array(data_X)
    ids = data_Y

    w = np.array([0, 0, 0])
    w = train_w(w, data_set, ids)
    plot_sample_with_line(data_set, ids, w)
```

---

```
from matplotlib import pyplot as plt
import numpy as np

def plot_sample_with_line(data_set, ids, w):
    plt.figure()
    axes = plt.subplot(111)
    for idx, point in enumerate(data_set):
        if ids[idx] == 1:
            sig = 'ro'
        else:
            sig = 'bx'
        print point
        axes.plot(point[0], point[1],sig)
    line_x = np.linspace(0, 4, num=50)
    if w[1] == 0:
        line_y = np.array([0] * 50)
    else:
        line_y = (-w[0] / w[1]) * line_x + (-w[2] / w[1])
    axes.plot(line_x, line_y)

    plt.xlim([0, 1])
    plt.ylim([0, 1])
    plt.show()
```


