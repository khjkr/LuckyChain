import prompts from 'prompts';
import _ from 'prompts';

class ConsoleManager {
  static printLogo() {
    console.log(`
    ██╗░░░░░██╗░░░██╗░█████╗░██╗░░██╗██╗░░░██╗░█████╗░██╗░░██╗░█████╗░██╗███╗░░██╗
    ██║░░░░░██║░░░██║██╔══██╗██║░██╔╝╚██╗░██╔╝██╔══██╗██║░░██║██╔══██╗██║████╗░██║
    ██║░░░░░██║░░░██║██║░░╚═╝█████═╝░░╚████╔╝░██║░░╚═╝███████║███████║██║██╔██╗██║
    ██║░░░░░██║░░░██║██║░░██╗██╔═██╗░░░╚██╔╝░░██║░░██╗██╔══██║██╔══██║██║██║╚████║
    ███████╗╚██████╔╝╚█████╔╝██║░╚██╗░░░██║░░░╚█████╔╝██║░░██║██║░░██║██║██║░╚███║
    ╚══════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝`)
  }

  static newData() {
    const questions: any = [
      {
        type: 'text',
        name: 'username',
        message: '사용하실 닉네임을 적어주세요.'
      },
      {
        type: 'number',
        name: 'age',
        message: '사용자의 나이를 적어주세요.'
      },
      {
        type: 'text',
        name: 'about',
        message: '한줄 소개말을 적어주세요.'
      }
    ];
     
    (async () => {
      const response = await prompts(questions)
      console.clear()
      console.log(response.username)
      console.log(response.age)
      console.log(response.about)
    })()
  }
}

export default ConsoleManager