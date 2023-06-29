import requests
import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf8')

import execjs


with open('./demo.js', mode='r', encoding='utf8') as f:
    js_code = f.read()
ctx = execjs.compile(js_code)
headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,en-GB;q=0.8,zh-CN;q=0.7,zh;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://nft.xhwc.net',
    'Pragma': 'no-cache',
    'Referer': 'https://nft.xhwc.net/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 Edg/114.0.1823.58',
    'content-type': 'application/json',
    'loginFrom': 'H5',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'token': '',
}


json_data = {
    'encryptString': ctx.call('main', input('phone:\n'), input('password:\n')),
}
print('encryptString===>', json_data['encryptString'])
response = requests.post('https://api-manage.xhwc.net/auth/login/pass', headers=headers, json=json_data)
print("response===>", response.text)
print(ctx.call('decrypt', response.text))
