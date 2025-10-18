const grid = document.getElementById("calendar-grid");
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let day = 1; day <= daysInMonth; day++) {
	const isSelected = Math.random() > 0.5;
	const isDone = Math.random() > 0.5;
	const statusClass = isSelected ? (isDone ? "check-mark" : "x-mark") : "";
	const dotClass = isSelected ? "dot selected" : "dot not-selected";

	grid.innerHTML += `
		<div class="col-4 col-sm-3 col-md-2 p-2 text-center day-cell ${statusClass}">
		${day}
			<span class="${dotClass}"></span>
		</div>`;
}
