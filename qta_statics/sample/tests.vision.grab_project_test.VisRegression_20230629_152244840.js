var tests_vision_grab_project_test_VisRegression_20230629_152244840 = {"testcase": "tests.vision.grab_project_test.VisRegression", "steps": [{"name": "\u6d4b\u8bd5\u7528\u4f8b\u521d\u59cb\u5316\u6b65\u9aa4", "start_time": "2023-06-29 15:22:42", "logs": [{"timestamp": "2023-06-29 15:22:42", "level": 20, "message": "pre_test \u51fa\u9519\uff0c\u5c06\u4e0d\u518d\u6267\u884c\u672c\u6b21\u6d4b\u8bd5\uff0c\u8fdb\u5165 post_test \u6e05\u7406\u8fc7\u7a0b", "record": {}, "attachments": {}}, {"timestamp": "2023-06-29 15:22:42", "level": 60, "message": "pre_test\u6267\u884c\u5931\u8d25", "record": {"traceback": "Traceback (most recent call last):\n  File \"D:\\Projects\\UIAutoTest\\venv\\lib\\site-packages\\testbase\\testcase.py\", line 1027, in _thread_run\n    task_result = getattr(self._testcase, it)()\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\__init__.py\", line 27, in pre_test\n    raise e\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\__init__.py\", line 23, in pre_test\n    self.m_pre_test()\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\vision\\grab_project_test.py\", line 48, in m_pre_test\n    logger.info(self.casedata)\n  File \"D:\\Projects\\UIAutoTest\\venv\\lib\\site-packages\\testbase\\logger.py\", line 87, in info\n    _logger.info(msg, *args, **kwargs)\n  File \"C:\\Program Files\\Python36\\lib\\logging\\__init__.py\", line 1306, in info\n    self._log(INFO, msg, args, **kwargs)\n  File \"C:\\Program Files\\Python36\\lib\\logging\\__init__.py\", line 1442, in _log\n    self.handle(record)\n  File \"C:\\Program Files\\Python36\\lib\\logging\\__init__.py\", line 1452, in handle\n    self.callHandlers(record)\n  File \"C:\\Program Files\\Python36\\lib\\logging\\__init__.py\", line 1514, in callHandlers\n    hdlr.handle(record)\n  File \"C:\\Program Files\\Python36\\lib\\logging\\__init__.py\", line 863, in handle\n    self.emit(record)\n  File \"D:\\Projects\\UIAutoTest\\venv\\lib\\site-packages\\testbase\\logger.py\", line 51, in emit\n    testresult.log_record(log_record.levelno, log_record.msg, record)\n  File \"D:\\Projects\\UIAutoTest\\venv\\lib\\site-packages\\testbase\\testresult.py\", line 277, in log_record\n    raise ValueError(\"msg='%r'\u5fc5\u987b\u662fstring\u7c7b\u578b\" % msg)\nValueError: msg='None'\u5fc5\u987b\u662fstring\u7c7b\u578b\n"}, "attachments": {"\u622a\u56fe": "tests.vision.grab_project_test.VisRegression_230629152242.jpg"}}], "succeed": false, "end_time": ["2023-06-29 15:22:42"]}, {"name": "post_test", "start_time": "2023-06-29 15:22:42", "logs": [{"timestamp": "2023-06-29 15:22:44", "level": 60, "message": "post_test\u6267\u884c\u5931\u8d25", "record": {"traceback": "Traceback (most recent call last):\n  File \"D:\\Projects\\UIAutoTest\\venv\\lib\\site-packages\\testbase\\testcase.py\", line 1027, in _thread_run\n    task_result = getattr(self._testcase, it)()\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\__init__.py\", line 40, in post_test\n    raise e\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\__init__.py\", line 38, in post_test\n    self.m_post_test()\n  File \"D:\\Projects\\UIAutoTest\\src\\tests\\vision\\grab_project_test.py\", line 101, in m_post_test\n    self.steps.terminate_background_processes()\nAttributeError: 'NoneType' object has no attribute 'terminate_background_processes'\n"}, "attachments": {"\u622a\u56fe": "tests.vision.grab_project_test.VisRegression_230629152244.jpg"}}], "succeed": false, "end_time": ["2023-06-29 15:22:44"]}], "failed_info": "ValueError: msg='None'\u5fc5\u987b\u662fstring\u7c7b\u578b", "result_type": "\u5931\u8d25", "succeed": false, "start_time": "2023-06-29 15:22:42", "end_time": "2023-06-29 15:22:44"}