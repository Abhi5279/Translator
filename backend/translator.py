from deep_translator import GoogleTranslator
import sys
import json


text = sys.argv[1]
target_lang = sys.argv[2]


translated = GoogleTranslator(source='auto', target=target_lang).translate(text)

sys.stdout.buffer.write(json.dumps({"translated": translated}, ensure_ascii=False).encode('utf-8'))
