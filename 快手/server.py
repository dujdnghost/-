import requests

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Cookie': 'did=web_d22f2e266c8307aa35b0bfc2ec8f21fe0814; soft_did=1619580708547; userId=81130054; kuaishou.live.web_st=ChRrdWFpc2hvdS5saXZlLndlYi5zdBKgAcjCCgEv84LAvcOAkkUIo3fkwKbse84d8lFYDDZ8WX8g1qIbAFixDzIM5LBWRqne0DF42D2Wml_eN2NjSvY3k9czJT98ajilpTsTY0lLXR9FHPRNwWI9q4y33J1xQ87cUt2wWzDgrsFCqV2mQd3ExFlu1DByLZsto4993d6l1nqMUqRzFtXmzlFY4jStni52eI7TMUTomfIXR-k8YvQUmHQaEjGueioax06vmORaF3eBQr3cQSIgUliuLgEPOHu4XjDCrUZSEYPf9yKQu3gAUuQsSThNCpQoBTAB; kuaishou.live.web_ph=fc056232d4eeafb306890dfe52bc5a1a195b; userId=81130054; kuaishou.live.bfb1s=ac5f27b3b62895859c4c1622f49856a4; ',
    'Referer': 'https://live.kuaishou.com/profile/pianmu45',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'baggage': 'sentry-environment=prod,sentry-release=a7af9c9',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sentry-trace': '8dd9dca279194904b633ac6af3b5eaf0-bb75db3657d5927b-0',
}

params = {
    'count': '12',
    'pcursor': '',
    'principalId': 'pianmu45',
    'hasMore': 'true',
}

response = requests.get('https://live.kuaishou.com/live_api/profile/public', params=params, headers=headers)
print(response.text)
response.close()
