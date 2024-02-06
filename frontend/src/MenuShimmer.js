import React from 'react'

const MenuShimmer = () => {
  return (
    <>
    <div>
        {Array(10)
            .fill("").map((e, index) => (
                <div class="border border-blue-300 shadow rounded-md p-4 max-w-2xl w-full mx-auto" key={index}>
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

            ))}


    </div>
</>
  )
}

export default MenuShimmer