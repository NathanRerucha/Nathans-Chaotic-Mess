const defaultContent = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus odio ut vehicula varius. Pellentesque convallis eros enim, eu vehicula ligula fermentum sit amet. Suspendisse potenti. Quisque arcu nisi, rhoncus nec feugiat eu, bibendum ut turpis. Cras commodo vitae nisl pharetra ultrices. Proin sodales ut felis nec semper. Phasellus ligula felis, gravida at pellentesque vitae, mattis nec tortor. Cras condimentum mattis justo quis auctor. Nam congue, elit ut sollicitudin sagittis, dolor orci ultrices nulla, vel volutpat sem nibh non urna. Duis elementum semper neque non convallis. Nullam eget vestibulum augue.

Ut bibendum tempor semper. Suspendisse potenti. Sed venenatis, ipsum vel hendrerit tristique, urna dolor molestie sem, nec ornare massa felis in justo. Curabitur sed rutrum justo, non tristique augue. Sed maximus fermentum mauris sed dignissim. Vivamus mattis neque consectetur auctor mattis. Aliquam fermentum sagittis purus, nec gravida turpis. Quisque ac neque ut turpis malesuada tempus. `

export default function PageContent({ content = defaultContent }) {
  return <main className="bg-gray-100 rounded-md p-6">{content}</main>
}
