import React from 'react'

const Scientists = ({scientists}) => {
    return(
      <div>

        <p> hellow </p>

        {
          scientists.map(scientist => {
            return scientist.name !== 'hack' ? (
              <div className="scientist" key={scientist.id}>
                <div>Name: { scientist.name }</div>
                <div>Age: { scientist.age }</div>
              </div>
            ) : null
          })
        }

      </div>
    )
}

export default Scientists;
