import React from 'react'

const Scientists = ({scientists, deleteScientist}) => {
    return(
      <div>

        <p> hellow </p>

        {
          scientists.map(scientist => {
            return scientist.name !== 'hack' ? (
              <div className="scientist" key={scientist.id}>
                <div>Name: { scientist.name }</div>
                <div>Age: { scientist.age }</div>
                <button onClick={() => {deleteScientist(scientist.id)}} type="button" name="button">X</button>
              </div>
            ) : null
          })
        }

      </div>
    )
}

export default Scientists;
