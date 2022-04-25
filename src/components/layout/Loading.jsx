import loading from "./assets/loading.gif"

export default function Loading() {
  return (
    <div>
      <img src={loading} alt="Loading..." width={180} className='text-center mx-auto' />
    </div>
  )
}
