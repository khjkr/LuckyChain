import prompts from 'prompts';
import _ from 'prompts';

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    'message': '사용자의 나이를 입력해주세요.',
    validate: value => value < 12 ? `12세 이상부터 이용 가능합니다.` : true
  })

  console.log(response)
})();