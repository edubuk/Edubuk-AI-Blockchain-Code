function Form() {
    return (
      <>
        
        
        <div className=" bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 pt-20">
        <div className="mx-5 md:mx-20 sm:mx-5">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="h-1 bg-gradient-to-r from-red-500 to-pink-500 to-purple-800" />
          </div>
        </div>
       
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300
                text-3xl font-medium leading-10">Signup Here Use Your Metamask Wallet Address</h2>
                <p className="mt-1 text-sm text-purple-200"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
                          WEB3 Public Wallet Address
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
                          Name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Account Type
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Record On Blockchain
                    </button>
                  </div>
                     </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  
        
  {/* end of personal Information */}


{/* Begening of Employee login */}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Login Here Company and Employees</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of emloyee login */}


  {/* Begening of student login */}
  <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">Institutes and Students</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of student login */}


  {/* Begening of learners login */}
  <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t  border-white" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">Login Here Expert and Learners</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="border-2 border-purple-700 px-4 py-5 bg-zinc-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                     
  
                      
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
                          Web3 Wallet Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
                          />
                      
  
                      
                   <div className="px-4 py-3  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Retrieve from Blockchain
                    </button>
                  </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
  {/* End of learners login */}


  {/* beginig of skills */}
  <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Employee Add Your Skills</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Employee id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Skills Name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />

    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of skills */}


 {/* beginig of skills */}
 <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Employee Add Your Working Experience</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Employee id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Starting Date
          </label>
          <input
            type="date"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Ending Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Role
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            
        <div className="col-span-6">
          <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
            Company Id
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
        </div>
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of working experience */}

{/* beginig of Academic grade */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Students Add Academic Grades</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Grade name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
        
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of working experience */}

 {/* beginig of student internship */}
 <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Students Add Internship Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Employee id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Starting Dtae
          </label>
          <input
            type="date"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Ending Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Role
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            
        <div className="col-span-6">
          <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
              Institute Id
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
        </div>
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of student internship */}

 {/* beginig of student internship */}
 <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Life Long Learner Add Certificate Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Learner id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Issuing Authority
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Candidate Name on the Certificate
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Name of the Degree
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            
        <div className="col-span-6">
          <label htmlFor="street-address" className="block text-sm font-medium text-purple-200">
              Issuer Id
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
        </div>
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of long life-learner */}

 {/* beginig of miit screening */}
 <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Students Add Learners: Add MIIT Screening</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            MIIT Screening Results
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
           
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of miit screening */}

{/* beginig of chosen career */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Students Add Learners: Add Chosen Career</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Name of Chosen Career Paths
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
           
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of choosing career */}


{/* beginig of miit screening */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">For Companies: Approve Employee's Work Experience</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Experience Id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Company Id
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
           
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of company approve */}

{/* beginig of student internship */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Companies: Approve Employee Skills</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Employee id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Skills Id
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Endorsing Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Comment
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of company approve skilss */}

{/* beginig of employee manager */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Edubuk as a Company: Approve Employee as a Manager</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Employee Id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Company approve imployee as manager */}

{/* beginig of Approve students internship */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Institutes: Approve Student's Internship</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
           Internship id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Institute Id
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of institute approve student internship */}


{/* beginig of Approve academic grades */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Institutes: Approve Academic Grades</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Grade Id
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Endorsing Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Comment
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Approve Academy */}

{/* beginig of approve dean */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Institutes: Approve Dean's Profile</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Dean Id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Company approve deans */}

{/* beginig of approve learners certificate */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Approve Learner's Certificates</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Certificate Id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
           Issuer Id
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
           
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of approve learners certificate */}

{/* beginig of edubuk certificate */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Edubuk as a Company: Approve Certicate Issuing Authority</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Enter Issuer Id
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of edubuk approve certificate */}


{/* beginig of edubuk as company */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Edubuk as a Company: Approve MIIT Screening Results</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            MIIT Screen Result
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Approval Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Enter Specific Comment
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Edubuk As company */}

{/* beginig of edubuk as company career paths */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  For Edubuk as a Company: Approve Career Paths</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Student Name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Chosen Career Paths
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
            </div>
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            Approval Date
          </label>
          <input
            type="date"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
            Enter Specific Comment
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Edubuk As company career path */}

{/* beginig of check employee wallet address */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check whether the wallet addressis is a Company or an Employee</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Address
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check employee walletaddress */}

{/* beginig of check student wallet address */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check whether the wallet addressis is a Company or an Student</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Address
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check student walletaddress */}

{/* beginig of check learner wallet address */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check whether the wallet addressis is a Company or an Learner</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Address
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check Learner walletaddress */}

{/* beginig of company information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Companies' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Company ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check company work experiences */}

{/* beginig of employee information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Employees' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Employees' ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check employee work information */}

{/* beginig ofemployee work experienece */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Check Employees' Work Experiences</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Employee ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check employee work experiences */}

{/* beginig of check employee skilss */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Employees' Skills</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Employee ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check employee skills */}

{/* beginig of institutes information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Institutes' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Institutes' ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check institute */}

{/* beginig of students information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Students' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Student ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check student information */}

{/* beginig of student grade */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Students' Grades</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Student ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check students grade */}

{/* beginig of student internship information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Students Internships' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Student ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check student internship */}

{/* beginig of expert information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Experts' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Expert ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check expert information */}

{/* beginig of Learners information */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Learners' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Learner ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check learners information */}

{/* beginig of Learners online courses */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Learners' Information</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Learner ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check learners online course */}

{/* beginig of Studnet and Learners miit */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Students' and Learners' MIIT Screening Profiles</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Learner ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check student and learners miit */}

{/* beginig of Studnet and Learners customize learning */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                  Check Students' and Learners' Customized Learning</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Student / Learner ID
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Check student and learners miit */}




{/* beginig of Update Wallet Address */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                Update Wallet Address</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
            WEB3 Public Wallet Address
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium text-purple-200">
           New Address
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
            />
           
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Record On Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>
</div>
</div>
</div>
{/* ending of Update Wallet Address */}




{/* beginig of Convert Wallet Address to Unique Id */}
<div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-white" />
          </div>
        </div>
  <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-medium leading-10 bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-pink-300 to-purple-300">
                Convert Wallet Address to Unique Id</h3>
                <p className="mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
<div className="mt-5 md:mt-0 md:col-span-2">
<form action="#" method="POST">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="border-2 border-pink-500 px-4 py-5 bg-zinc-800 sm:p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium text-purple-200">
          Enter Address
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="mt-1 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-2 border-pink-400 rounded-md h-12"
          />

        
          
    <div className="px-4 py-3  text-right sm:px-6">
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 to-purple-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Retrieve from Blockchain
      </button>
    </div>
        </div>
      </div>
    </div>
   
  </div>
</form>

<div className="mb-20"></div>
</div>
</div>
</div>

{/* ending of Convert Wallet Address to Unique Id */}

</div>
</div>
 

      </>
    )
  }
export default Form;  