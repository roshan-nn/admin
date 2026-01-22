import React from 'react'

const Adduser = () => {
  return (
    <div>
        <form>
            {/* <label>name</label> */}
            <label>name:
                <input class="bg-blue-300"  type="name" />
            </label>
            <label>dob:
                <input class="bg-emerald-400" type="dob" />
                </label>
                <label>age:
                <input class="border-t-2 bg-amber-200" type="age" />
                </label>

            
        </form>
    </div>
  )
}

export default Adduser