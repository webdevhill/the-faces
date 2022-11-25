import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 ma1 pa2">
        {'This app detects the faces with an AI learning model. Please provide an image file or image link in a .jpeg format'}
      </p>
      <div className="center pa1">
        <div className="form center pa3 br3 shadow-5">
          <input 
            className="f4 pa2 w-70 center" 
            type='text'
            onChange={onInputChange} 
          />
          <button 
            className="w-30 grow f4 link ph3 dib bg-light-silver"
            onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
