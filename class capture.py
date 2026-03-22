import time
import json
from selenium import webdriver
from selenium.webdriver.edge.service import Service as EdgeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
options = webdriver.EdgeOptions()
driver = webdriver.Edge( options=options)
driver.get('https://bkzhjx.wh.sdu.edu.cn/')
account_box = driver.find_element('id','un')    #F12解析
password_box = driver.find_element('id','pd')
button = driver.find_element('id','index_login_btn')  


account_box.send_keys('account_name')   #传递参数
password_box.send_keys('account_keys')
button.click()
title = WebDriverWait(driver,15).until(EC.url_contains("bkzhjx")) 
time.sleep(1)    #这个等待并不好 没调试好 网页加载速度和元素出现速度不同 可能因为我的抓取方式是截图 如果换一种方式可能会避免这个简陋的等待
driver.get('https://bkzhjx.wh.sdu.edu.cn/jsxsd/framework/xsMainV_new.htmlx?t1=1')
driver.execute_script("document.body.style.zoom='80%'")
sch = driver.find_element(By.CLASS_NAME,'content-left')
time.sleep(1)
sch.screenshot('./kebiao.png')  #还有何方法呢
driver.quit()
