

function TotoList(props) {

  return (
    <div className="border w-100 mb-2 p-0.5">
      <div className="flex items-center justify-between  gap-4 w-full">
          <div> <span>{props.index+1} :</span> {props.arr}</div>
          <div className="bg-gray-300 p-1 rounded-sm font-semibold hover:bg-gray-400 cursor-pointer " onClick={()=>props.delete(props.index)}>delete</div>
      </div>
      
    </div>
  )
}

export default TotoList
