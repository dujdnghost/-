import requests
import numpy as np
import math
import random
import cv2
from PIL import Image

cookies = {
    '_did': 'web_16240476407DBB64',
    'did': 'web_7fc1456e2b8137b6965575e8f18a0f1389c7',
}

session = requests.session()


def login():
    headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-type': 'application/x-www-form-urlencoded',
        'Origin': 'https://live.kuaishou.com',
        'Referer': 'https://live.kuaishou.com/profile/tingan666',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'sid': 'kuaishou.live.web',
        'password': 'zxcvbnmlp0',
        'captchaToken': '',
        'countryCode': '+86',
        'phone': '15623191782',
    }

    response = session.post('https://id.kuaishou.com/pass/kuaishou/login/phone', headers=headers, data=data)
    cook = response.cookies.get_dict()
    print(response.cookies.items(),response.cookies)
    cook_copy = cook.copy()
    del cook_copy['passToken']
    print(cook_copy)
    datas = response.json()
    json_data = {
        'userLoginInfo': {
            'authToken': datas["kuaishou.live.web.at"],
            'sid': 'kuaishou.live.web',
        },
    }
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://live.kuaishou.com',
        'Referer': 'https://live.kuaishou.com/profile/tingan666',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    response = session.post('https://live.kuaishou.com/live_api/baseuser/userLogin', cookies=cook, headers=headers,
                            json=json_data)
    print(response.text)
    print(response.cookies.items(), response.cookies)
    if response.json()['data']['result'] == 1:
        cook2 = response.cookies.get_dict()
        print(cook2)
        with open('./img/config.txt', mode='w', encoding='utf8') as f:
            cookie = dir_to_string(cook_copy) + dir_to_string(cook2)
            f.write(cookie)
        print('save cookies ok')


def dir_to_string(dir):
    s = ''
    for i in dir.keys():
        s += i + '=' + dir[i]+'; '
    return s

login()


def get_info():
    headers = {
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        # 'Cookie': 'kpf=PC_WEB; clientid=3; did=web_6d41f33826e0debb514558f9caa73f1e; kpn=KUAISHOU_VISION',
        'Origin': 'https://www.kuaishou.com',
        'Referer': 'https://www.kuaishou.com/profile/3xq8zvt6na6uvts',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'accept': '*/*',
        'content-type': 'application/json',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
    }

    json_data = {
        'operationName': 'visionProfilePhotoList',
        'variables': {
            'userId': '3xq8zvt6na6uvts',
            'pcursor': '',
            'page': 'profile',
        },
        'query': 'fragment photoContent on PhotoEntity {\n  id\n  duration\n  caption\n  originCaption\n  likeCount\n  viewCount\n  commentCount\n  realLikeCount\n  coverUrl\n  photoUrl\n  photoH265Url\n  manifest\n  manifestH265\n  videoResource\n  coverUrls {\n    url\n    __typename\n  }\n  timestamp\n  expTag\n  animatedCoverUrl\n  distance\n  videoRatio\n  liked\n  stereoType\n  profileUserTopPhoto\n  musicBlocked\n  __typename\n}\n\nfragment feedContent on Feed {\n  type\n  author {\n    id\n    name\n    headerUrl\n    following\n    headerUrls {\n      url\n      __typename\n    }\n    __typename\n  }\n  photo {\n    ...photoContent\n    __typename\n  }\n  canAddComment\n  llsid\n  status\n  currentPcursor\n  tags {\n    type\n    name\n    __typename\n  }\n  __typename\n}\n\nquery visionProfilePhotoList($pcursor: String, $userId: String, $page: String, $webPageArea: String) {\n  visionProfilePhotoList(pcursor: $pcursor, userId: $userId, page: $page, webPageArea: $webPageArea) {\n    result\n    llsid\n    webPageArea\n    feeds {\n      ...feedContent\n      __typename\n    }\n    hostName\n    pcursor\n    __typename\n  }\n}\n',
    }

    response = session.post('https://www.kuaishou.com/graphql', cookies=cookies, headers=headers, json=json_data)
    print(response.json()['data']['url'])
    return response.json()['data']['url']


def get_config(config_url):
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9,en-GB;q=0.8,zh-CN;q=0.7,zh;q=0.6',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        # 'Cookie': '_did=web_16240476407DBB64; did=web_7fc1456e2b8137b6965575e8f18a0f1389c7',
        'Origin': 'https://captcha.zt.kuaishou.com',
        'Referer': config_url,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    data = {
        'captchaSession': config_url.split('?captchaSession=')[1].split('&')[0]
    }

    response = session.post(
        'https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/config',
        cookies=cookies,
        headers=headers,
        data=data,
    )
    print(response.json())
    return {
        'captchaSn': response.json()['captchaSn'],
        'disX': response.json()['disX'],
        'disY': response.json()['disY']
    }


def save_img(dirs):
    headers = {
        'Accept': 'image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9,en-GB;q=0.8,zh-CN;q=0.7,zh;q=0.6',
        'Connection': 'keep-alive',
        # 'Cookie': '_did=web_16240476407DBB64; did=web_7fc1456e2b8137b6965575e8f18a0f1389c7',
        'Referer': 'https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession=Cgp6dC5jYXB0Y2hhEocCMOq2sVieCqUHpUBWuBWhfrXEKkpLDK1ebkB66My_7CBOAxBoVou8Y7qMQDKhQqh3l1Fmng-i8Ph3D6F0C1V0amA-6v8YZahcOlhx61PDVQe8mJ9ITGLSbUG-PehAhV5XH_wWhPaSBAe1G0ImrTpHvovZG6khx2TCA-UES_YaYzLEZ_KPQSqDpPvnd0FNU-xlSroyihiB1tiQldihIaAXncxmN20PYeG_HYoIt6Ogq-c_nK7-I9NZ21xq0MKkoIspWrc8Dqt5QGZv7YTxglbyAsJNLsiB7cgtCbu-cUQkUnG_UvaRigsE2FhTY8wmYtv5tN-WcXjNcTj_wstn4ZtXHlqcyE8p7xwaEs0SRXZhpgX7OQIs-8MFfIBJ5SgFMAI&type=1&configUrl=https%3A%2F%2Fcaptcha.zt.kuaishou.com%2Frest%2Fzt%2Fcaptcha%2Fsliding%2Fconfig&bizName=ANTICRAWL_DEFAULT',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.58',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    params = {
        'captchaSn': dirs['captchaSn']
    }
    img_list = ['bgPic', 'cutPic']
    for i in img_list:
        response = session.get(
            f'https://captcha.zt.kuaishou.com/rest/zt/captcha/sliding/{i}',
            params=params,
            cookies=cookies,
            headers=headers,
        )
        if i == 'bgPic':
            path = './img/bgPic.jpg'
            new_width = 316
            new_height = 184
        else:
            new_width = 56
            new_height = 56
            path = './img/cutPic.png'
        with open(path, mode='wb') as f:
            f.write(response.content)
        with Image.open(path) as im:
            im_resized = im.resize((new_width, new_height))
            im_resized.save(path)


# save_img(get_config(get_info()))
'''
author: cbb
这个库基于贝塞尔曲线实现模拟人手动滑动的轨迹
可以用于selenium轨迹的模拟，或者生成轨迹数组用于js加密通过网站服务器后端分控检测
QQ群 134064772
里面的人说话好听，个个都是人才
'''


class bezierTrajectory:

    def _bztsg(self, dataTrajectory):
        lengthOfdata = len(dataTrajectory)

        def staer(x):
            t = ((x - dataTrajectory[0][0]) / (dataTrajectory[-1][0] - dataTrajectory[0][0]))
            y = np.array([0, 0], dtype=np.float64)
            for s in range(len(dataTrajectory)):
                y += dataTrajectory[s] * ((math.factorial(lengthOfdata - 1) / (
                        math.factorial(s) * math.factorial(lengthOfdata - 1 - s))) * math.pow(t, s) * math.pow(
                    (1 - t), lengthOfdata - 1 - s))
            return y[1]

        return staer

    def _type(self, type, x, numberList):
        numberListre = []
        pin = (x[1] - x[0]) / numberList
        if type == 0:
            for i in range(numberList):
                numberListre.append(i * pin)
            if pin >= 0:
                numberListre = numberListre[::-1]
        elif type == 1:
            for i in range(numberList):
                numberListre.append(1 * ((i * pin) ** 2))
            numberListre = numberListre[::-1]
        elif type == 2:
            for i in range(numberList):
                numberListre.append(1 * ((i * pin - x[1]) ** 2))

        elif type == 3:
            dataTrajectory = [np.array([0, 0]), np.array([(x[1] - x[0]) * 0.8, (x[1] - x[0]) * 0.6]),
                              np.array([x[1] - x[0], 0])]
            fun = self._bztsg(dataTrajectory)
            numberListre = [0]
            for i in range(1, numberList):
                numberListre.append(fun(i * pin) + numberListre[-1])
            if pin >= 0:
                numberListre = numberListre[::-1]
        numberListre = np.abs(np.array(numberListre) - max(numberListre))
        biaoNumberList = ((numberListre - numberListre[numberListre.argmin()]) / (
                numberListre[numberListre.argmax()] - numberListre[numberListre.argmin()])) * (x[1] - x[0]) + x[0]
        biaoNumberList[0] = x[0]
        biaoNumberList[-1] = x[1]
        return biaoNumberList

    def getFun(self, s):
        '''

        :param s: 传入P点
        :return: 返回公式
        '''
        dataTrajectory = []
        for i in s:
            dataTrajectory.append(np.array(i))
        return self._bztsg(dataTrajectory)

    def simulation(self, start, end, le=1, deviation=0, bias=0.5):
        '''

        :param start:开始点的坐标 如 start = [0, 0]
        :param end:结束点的坐标 如 end = [100, 100]
        :param le:几阶贝塞尔曲线，越大越复杂 如 le = 4
        :param deviation:轨迹上下波动的范围 如 deviation = 10
        :param bias:波动范围的分布位置 如 bias = 0.5
        :return:返回一个字典equation对应该曲线的方程，P对应贝塞尔曲线的影响点
        '''
        start = np.array(start)
        end = np.array(end)
        cbb = []
        if le != 1:
            e = (1 - bias) / (le - 1)
            cbb = [[bias + e * i, bias + e * (i + 1)] for i in range(le - 1)]

        dataTrajectoryList = [start]

        t = random.choice([-1, 1])
        w = 0
        for i in cbb:
            px1 = start[0] + (end[0] - start[0]) * (random.random() * (i[1] - i[0]) + (i[0]))
            p = np.array([px1, self._bztsg([start, end])(px1) + t * deviation])
            dataTrajectoryList.append(p)
            w += 1
            if w >= 2:
                w = 0
                t = -1 * t

        dataTrajectoryList.append(end)
        return {"equation": self._bztsg(dataTrajectoryList), "P": np.array(dataTrajectoryList)}

    def trackArray(self, start, end, numberList, le=1, deviation=0, bias=0.5, type=0, cbb=0, yhh=10):
        '''

        :param start:开始点的坐标 如 start = [0, 0]
        :param end:结束点的坐标 如 end = [100, 100]
        :param numberList:返回的数组的轨迹点的数量 numberList = 150
        :param le:几阶贝塞尔曲线，越大越复杂 如 le = 4
        :param deviation:轨迹上下波动的范围 如 deviation = 10
        :param bias:波动范围的分布位置 如 bias = 0.5
        :param type:0表示均速滑动，1表示先慢后快，2表示先快后慢，3表示先慢中间快后慢 如 type = 1
        :param cbb:在终点来回摆动的次数
        :param yhh:在终点来回摆动的范围
        :return:返回一个字典trackArray对应轨迹数组，P对应贝塞尔曲线的影响点
        '''
        s = []
        fun = self.simulation(start, end, le, deviation, bias)
        w = fun['P']
        fun = fun["equation"]
        if cbb != 0:
            numberListOfcbb = round(numberList * 0.2 / (cbb + 1))
            numberList -= (numberListOfcbb * (cbb + 1))

            xTrackArray = self._type(type, [start[0], end[0]], numberList)
            for i in xTrackArray:
                s.append([i, fun(i)])
            dq = yhh / cbb
            kg = 0
            ends = np.copy(end)
            for i in range(cbb):
                if kg == 0:
                    d = np.array([end[0] + (yhh - dq * i),
                                  ((end[1] - start[1]) / (end[0] - start[0])) * (end[0] + (yhh - dq * i)) + (
                                          end[1] - ((end[1] - start[1]) / (end[0] - start[0])) * end[0])])
                    kg = 1
                else:
                    d = np.array([end[0] - (yhh - dq * i),
                                  ((end[1] - start[1]) / (end[0] - start[0])) * (end[0] - (yhh - dq * i)) + (
                                          end[1] - ((end[1] - start[1]) / (end[0] - start[0])) * end[0])])
                    kg = 0
                print(d)
                y = self.trackArray(ends, d, numberListOfcbb, le=2, deviation=0, bias=0.5, type=0, cbb=0, yhh=10)
                s += list(y['trackArray'])
                ends = d
            y = self.trackArray(ends, end, numberListOfcbb, le=2, deviation=0, bias=0.5, type=0, cbb=0, yhh=10)
            s += list(y['trackArray'])

        else:
            xTrackArray = self._type(type, [start[0], end[0]], numberList)
            for i in xTrackArray:
                s.append([i, fun(i)])
        return {"trackArray": np.array(s), "P": w}


# app = bezierTrajectory()
# print(app.trackArray(start=[0, 0], end=[100, 0], numberList=50, le=4, deviation=5)['trackArray'])


class SlideCrack(object):
    def __init__(self, gap, bg, out):
        """
        init code
        :param gap: 缺口图片
        :param bg: 背景图片
        :param out: 输出图片
        """
        self.gap = gap
        self.bg = bg
        self.out = out

    @staticmethod
    def clear_white(img):
        # 清除图片的空白区域，这里主要清除滑块的空白
        img = cv2.imread(img)
        rows, cols, channel = img.shape
        min_x = 255
        min_y = 255
        max_x = 0
        max_y = 0
        for x in range(1, rows):
            for y in range(1, cols):
                t = set(img[x, y])
                if len(t) >= 2:
                    if x <= min_x:
                        min_x = x
                    elif x >= max_x:
                        max_x = x

                    if y <= min_y:
                        min_y = y
                    elif y >= max_y:
                        max_y = y
        img1 = img[min_x:max_x, min_y: max_y]
        return img1

    def template_match(self, tpl, target):
        th, tw = tpl.shape[:2]
        result = cv2.matchTemplate(target, tpl, cv2.TM_CCOEFF_NORMED)
        # 寻找矩阵(一维数组当作向量,用Mat定义) 中最小值和最大值的位置
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        tl = max_loc
        br = (tl[0] + tw, tl[1] + th)
        # 绘制矩形边框，将匹配区域标注出来
        # target：目标图像
        # tl：矩形定点
        # br：矩形的宽高
        # (0,0,255)：矩形边框颜色
        # 1：矩形边框大小
        cv2.rectangle(target, tl, br, (0, 0, 255), 2)
        cv2.imwrite(self.out, target)
        return tl[0]

    @staticmethod
    def image_edge_detection(img):
        edges = cv2.Canny(img, 100, 200)
        return edges

    def discern(self):
        img1 = self.clear_white(self.gap)
        img1 = cv2.cvtColor(img1, cv2.COLOR_RGB2GRAY)
        slide = self.image_edge_detection(img1)

        back = cv2.imread(self.bg, 0)
        back = self.image_edge_detection(back)

        slide_pic = cv2.cvtColor(slide, cv2.COLOR_GRAY2RGB)
        back_pic = cv2.cvtColor(back, cv2.COLOR_GRAY2RGB)
        x = self.template_match(slide_pic, back_pic)
        # 输出横坐标, 即 滑块在图片上的位置
        print(x)


# if __name__ == "__main__":
#     # 滑块图片
#     image1 = "img/cutPic.png"
#     # 背景图片
#     image2 = "img/bgPic.jpg"
#
#     # 处理结果图片,用红线标注
#     image3 = "img/3_3.png"
#     sc = SlideCrack(image1, image2, image3)
#     sc.discern()


def identify_gap(bg, tp, out):
    '''
    bg: 背景图片
    tp: 缺口图片
    out:输出图片
    '''
    # 读取背景图片和缺口图片
    bg_img = cv2.imread(bg)  # 背景图片
    tp_img = cv2.imread(tp)  # 缺口图片

    # 识别图片边缘
    bg_edge = cv2.Canny(bg_img, 100, 200)
    tp_edge = cv2.Canny(tp_img, 100, 200)

    # 转换图片格式
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)

    # 缺口匹配
    res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)  # 寻找最优匹配

    # 绘制方框
    th, tw = tp_pic.shape[:2]
    tl = max_loc  # 左上角点的坐标
    br = (tl[0] + tw, tl[1] + th)  # 右下角点的坐标
    cv2.rectangle(bg_img, tl, br, (0, 0, 255), 2)  # 绘制矩形
    cv2.imwrite(out, bg_img)  # 保存在本地

    # 返回缺口的X坐标
    return tl[0]

# print(identify_gap(tp="img/cutPic.png", bg="img/bgPic.jpg", out='./img/ppp.png'))
