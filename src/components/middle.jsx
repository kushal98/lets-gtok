import {Card} from './card'

export const Middle = (props) => {
    return (
      <div id='middle' className="text-center">
        <div className='container'>
          <div className='section-title'>
            <h2>Join | Share | Feel Relief</h2>
            <p>
              A community to spread positivity.
            </p>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <Card />
              <Card />
              <Card />
              <div id='share'>
                Share what's on your mind with community
              </div>
              <div style={{ display:'flex', alignItems: 'center', justifyContent:'center'}}>
                <button id='btn'>
                  Share Feeling
                </button>
              </div>
            </div>
            <div className='col-xs-12 col-md-6'>
              <Card />
              <Card />
              <Card />
              <div id='share'>
                Share what you are doing with community
              </div>
              <div style={{ display:'flex', alignItems: 'center', justifyContent:'center'}}>
                <button id='btn'>
                  Share Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  