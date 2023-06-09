import PropTypes from 'prop-types'

function Form(props) {
    return (
        <div className="Form mt-10">
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label text-white">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label text-white">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationDefaultUsername" class="form-label text-white">Username</label>
                    <div class="input-group">
                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault03" class="form-label text-white">City</label>
                    <input type="text" class="form-control" id="validationDefault03" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationDefault04" class="form-label text-white">{props.state}</label>
                    <select class="form-select" id="validationDefault04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                        <option>This</option>
                        <option>That</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationDefault05" class="form-label text-white">Zip</label>
                    <input type="text" class="form-control" id="validationDefault05" required />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label text-white" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form >
        </div >
    )
}
export default Form 
Form.PropTypes = {
    state : PropTypes.string
}

Form.defaultProps ={  //This automatically gives the value for state
    state: "State"
}