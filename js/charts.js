const chartCanvas = document.getElementById("studentChart");

if (chartCanvas) {

    new Chart(chartCanvas, {

        type: "bar",

        data: {

            labels: [
                "CSE",
                "ECE",
                "EEE",
                "MECH",
                "CIVIL"
            ],

            datasets: [{

                label: "Students",

                data: [
                    120,
                    95,
                    82,
                    68,
                    54
                ],

                backgroundColor: [

                    "#2563eb",
                    "#10b981",
                    "#f59e0b",
                    "#ef4444",
                    "#8b5cf6"

                ],

                borderRadius: 10

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}