import {Card} from './card'

export const Middle = (props) => {
    return (
      <div id='middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <Card />
            </div>
            <div className='col-xs-12 col-md-6'>
            </div>
          </div>
        </div>
      </div>
    )
  }
  