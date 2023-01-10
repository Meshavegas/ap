import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'

function CreateClass() {
    const [PostData, setPostData] = useState({
        name: '',
        info: ''
    })
    return (
        <div className='contain'>
            <form className='form'>

                <div className='header'>Créer une salle virtuelle</div>
                <div className='label'> Nom</div>
                <input
                    className='text_input'
                    required placeholder='Nom de la salle virtuelle'
                    value={PostData.name}
                    onChange={(e) => { setPostData({ ...PostData, name: e.target.value }) }}
                />
                <div className='label'> Description</div>
                <textarea
                    className='text_input2 '
                    placeholder="Brève description de la salle virtuelle...."
                    required rows={5}
                    value={PostData.info}
                    onChange={(e) => { setPostData({ ...PostData, info: e.target.value }) }}
                >  </textarea>
                <Button
                    className=""
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>

    )
}

export default CreateClass