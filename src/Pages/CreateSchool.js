import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'

function CreateSchool() {
    const [PostData, setPostData] = useState({
        name: '',
        info: ''
    })
    return (
        <div className='contain'>
            <form className='form'>

                <div className='header'>Créer un établissement</div>
                <div className='label'> Nom</div>
                <input
                    className='text_input'
                    required placeholder='Nom de l\établissement'
                    value={PostData.name}
                    onChange={(e) => { setPostData({ ...PostData, name: e.target.value }) }}
                />
                <div className='label'> Description</div>
                <textarea
                    className='text_input2 '
                    placeholder="Description de l'établissement ..."
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

export default CreateSchool