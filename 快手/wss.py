import asyncio
from aiohttp import ClientSession
from aiowebsocket.converses import AioWebSocket
import requests


def get_info():
    session = requests.session()
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Cookie': 'clientid=3; did=web_ee633ea4e2e89b60777cc6ce0e97304b; client_key=65890b29; kpn=GAME_ZONE; _did=web_31978838172D991B; did=web_ad03d947b69d0f6b76864660c88b6823b1ed; ksliveShowClipTip=true; soft_did=1619580708547; userId=81130054; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAXkWDWZiTSfrvGxyWprtz2XPi8kWYd811iOYbWYignDBRZ4T-4JL28fGD-6xExde72hgKUyfCAryZnGeJl_U4X9psNKSfPZjkTNCB2se-v0k_XdH8SNlzBzjBTNfZXk3UUchO_6TaB7xMwOzJYRoFrHkIUkURikOPTVkk8rgvW17MlXEUVNnmXY6uK82ZuGSGgcvXQ0NvvKBQWlAREodk6UaEjGueioax06vmORaF3eBQr3cQSIgJSnt5N9hd66zc96_witPMoqYhgBxSqOIY87RWynoRnooBTAB; kuaishou.live.web_ph=12598d8128dff0b25802f81dffc17dc37268; userId=81130054; kuaishou.live.bfb1s=ac5f27b3b62895859c4c1622f49856a4; showFollowRedIcon=1',
        'Referer': 'https://live.kuaishou.com/my-follow/living',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }

    response = session.get('https://live.kuaishou.com/u/tingan666', headers=headers)
    livestream_id = response.text.split('{"liveStream":{"id":"')[1].split('"')[0]
    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Cookie': 'clientid=3; did=web_ee633ea4e2e89b60777cc6ce0e97304b; client_key=65890b29; kpn=GAME_ZONE; _did=web_31978838172D991B; did=web_ad03d947b69d0f6b76864660c88b6823b1ed; ksliveShowClipTip=true; soft_did=1619580708547; userId=81130054; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAXkWDWZiTSfrvGxyWprtz2XPi8kWYd811iOYbWYignDBRZ4T-4JL28fGD-6xExde72hgKUyfCAryZnGeJl_U4X9psNKSfPZjkTNCB2se-v0k_XdH8SNlzBzjBTNfZXk3UUchO_6TaB7xMwOzJYRoFrHkIUkURikOPTVkk8rgvW17MlXEUVNnmXY6uK82ZuGSGgcvXQ0NvvKBQWlAREodk6UaEjGueioax06vmORaF3eBQr3cQSIgJSnt5N9hd66zc96_witPMoqYhgBxSqOIY87RWynoRnooBTAB; kuaishou.live.web_ph=12598d8128dff0b25802f81dffc17dc37268; userId=81130054; kuaishou.live.bfb1s=ac5f27b3b62895859c4c1622f49856a4; showFollowRedIcon=1',
        'Referer': 'https://live.kuaishou.com/u/tingan666',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'baggage': 'sentry-environment=prod,sentry-release=a7af9c9',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sentry-trace': 'e48b233700bc4127a5ce8f6958ac0a7d-ac18f1d61ed4480a-0',
    }

    params = {
        'liveStreamId': livestream_id,
    }

    response = session.get(
        'https://live.kuaishou.com/live_api/liveroom/websocketinfo',
        params=params,
        headers=headers,
    )
    return response.text.split(',"token":"')[1].split('"')[0]



async def startup(uri):
    async with AioWebSocket(uri) as aws:
        converse = aws.manipulator
        while True:
            mes = await converse.receive()
            print(mes)
            if mes == 'over':
                break

import asyncio
from aiowebsocket.converses import AioWebSocket


async def startup(uri, msg):
    async with AioWebSocket(uri) as aws:
        converse = aws.manipulator

        # 给服务端发送验证消息，观察网页接口数据动态获取
        message = msg
        await converse.send(message)

        while True:
            receive = await converse.receive()

            # 拿到的是byte类型数据，解码为字符串数据
            print(receive.decode())


if __name__ == '__main__':
    remote = 'wss://live-ws-group6.kuaishou.com/websocket'
    asyncio.get_event_loop().run_until_complete(startup(remote, get_info()))