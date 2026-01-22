import React from 'react'

const Adduser = () => {
  return (
    <div>
        <form>
            {/* <label>name</label> */}
            <label>name:
                <input className="bg-blue-300"  type="name" />
            </label>
            <label>dob:
                <input className="bg-emerald-400" type="dob" />
                </label>
                <label>age:
                <input className="border-t-2 bg-amber-200" type="age" />
                </label>

            
        </form>
    </div>
  )
}

export default Adduser