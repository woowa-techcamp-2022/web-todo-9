import './index.scss';

import remove from '@/assets/remove.svg';
import Component from '@/libs/Component';

class TodoCard extends Component {
  constructor($container, initialState) {
    super($container, initialState);

    this.state = {
      inputs: {
        title: 'Title',
        body: 'Body',
        author: 'Author',
      },
      cardStatus: 'creatable',
    };

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  getCardStyleByStatus() {
    const cardClassList = ['card'];
    const { cardStatus } = this.state;
    switch (cardStatus) {
      case 'creatable':
      case 'editable':
        cardClassList.push('active');
        break;

      case 'removable':
        cardClassList.push('removable');
        break;

      case 'floating':
        cardClassList.push('floating');
        break;

      case 'remain':
        cardClassList.push('remain');
        break;

      default:
        break;
    }
    return cardClassList.join(' ');
  }

  isCardActive() {
    const { cardStatus } = this.state;
    return cardStatus === 'editable' || cardStatus === 'creatable';
  }

  getTemplateForButton() {
    const { cardStatus } = this.state;
    return `
			<div class="button-wrapper">
				<button class="btn normal">취소</button>
				<button class="btn accent">${cardStatus === 'creatable' ? '등록' : '수정'}</button>
			</div>
		`;
  }

  setButton() {}

  template() {
    return `
			<div class="${this.getCardStyleByStatus()}">
				<div class="card__wrapper">
					<p class="card__title">TITLE</p>	
					<p class="card__body">BODY</p>
					<p class="card__author">author by WEB</p>
					${this.isCardActive() ? this.getTemplateForButton() : ''}
				</div>
				${
          this.isCardActive()
            ? ''
            : `
								<button class="card__btn-remove">
									<img src=${remove} alt="remove-btn" />
								</button>
							`
        }
				
			</div>
		`;
  }

  render() {
    this.$container.innerHTML = this.template();
  }
}

export default TodoCard;