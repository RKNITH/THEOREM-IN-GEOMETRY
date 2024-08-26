const theorems = [
    {
        name: "Apollonius's Theorem",
        details: `
            <h2>Apollonius's Theorem</h2>
            <p>Apollonius's Theorem states that in any triangle, the sum of the squares of any two sides is equal to twice the square of half the third side, plus twice the square of the median that bisects the third side.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if M is the midpoint of side BC, then AB² + AC² = 2(AM² + BM²).</p>
            <h3>Uses:</h3>
            <p>This theorem is used in various geometric proofs and calculations involving medians and distances in triangles.</p>
            <p><a href="https://en.wikipedia.org/wiki/Apollonius%27s_theorem" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Ceva's Theorem",
        details: `
            <h2>Ceva's Theorem</h2>
            <p>Ceva's Theorem states that for a given triangle ABC, the cevians AD, BE, and CF (where D, E, and F lie on sides BC, CA, and AB, respectively) are concurrent if and only if (AF/FB) * (BD/DC) * (CE/EA) = 1.</p>
            <h3>Example:</h3>
            <p>If in triangle ABC, AD, BE, and CF are cevians meeting at a single point, then the product of the ratios of the divided segments equals 1.</p>
            <h3>Uses:</h3>
            <p>Ceva's Theorem is used to prove the concurrency of cevians and is a fundamental theorem in triangle geometry.</p>
            <p><a href="https://en.wikipedia.org/wiki/Ceva%27s_theorem" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Euler's Theorem in Geometry",
        details: `
            <h2>Euler's Theorem in Geometry</h2>
            <p>Euler's Theorem in Geometry states that the distance between the circumcenter and the incenter of a triangle is given by the formula: OI² = R² - 2rR, where R is the circumradius and r is the inradius.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if O is the circumcenter and I is the incenter, then the distance OI can be calculated using the above formula.</p>
            <h3>Uses:</h3>
            <p>This theorem is useful in understanding the relationship between the circumcenter and incenter and is applied in various geometric problems.</p>
            <p><a href="https://en.wikipedia.org/wiki/Euler%27s_theorem_in_geometry" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Menelaus's Theorem",
        details: `
            <h2>Menelaus's Theorem</h2>
            <p>Menelaus's Theorem states that for a given triangle ABC, if a transversal line intersects the sides BC, CA, and AB at points D, E, and F respectively, then BD/DC * CE/EA * AF/FB = 1.</p>
            <h3>Example:</h3>
            <p>If a line cuts triangle ABC at points D, E, and F, Menelaus's Theorem helps establish the relationship between the segments created.</p>
            <h3>Uses:</h3>
            <p>This theorem is widely used in projective geometry and in proving collinearity of points.</p>
            <p><a href="https://en.wikipedia.org/wiki/Menelaus%27s_theorem" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Nine-Point Circle Theorem",
        details: `
            <h2>Nine-Point Circle Theorem</h2>
            <p>The Nine-Point Circle Theorem states that there is a unique circle that passes through nine significant concurrent points of any triangle: the midpoint of each side, the foot of each altitude, and the midpoint of the segment from each vertex to the orthocenter.</p>
            <h3>Example:</h3>
            <p>For any triangle ABC, this circle passes through the midpoints of sides AB, BC, and CA, as well as the feet of the altitudes from A, B, and C.</p>
            <h3>Uses:</h3>
            <p>This theorem is important in triangle geometry and is applied in various advanced geometric constructions and proofs.</p>
            <p><a href="https://en.wikipedia.org/wiki/Nine-point_circle" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Simson Line Theorem",
        details: `
            <h2>Simson Line Theorem</h2>
            <p>The Simson Line Theorem states that the feet of the perpendiculars drawn from a point on the circumcircle of a triangle to the sides of the triangle are collinear. This line is called the Simson line.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if point P lies on the circumcircle, then the feet of the perpendiculars from P to sides AB, BC, and CA lie on a straight line.</p>
            <h3>Uses:</h3>
            <p>The Simson Line is used in advanced triangle geometry and helps in proving the collinearity of points.</p>
            <p><a href="https://en.wikipedia.org/wiki/Simson_line" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Stewart's Theorem",
        details: `
            <h2>Stewart's Theorem</h2>
            <p>Stewart's Theorem provides a relation between the lengths of the sides of a triangle and the length of a cevian of the triangle.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if AD is a cevian, then AB² * DC + AC² * DB = AD² * BC + BD * DC * BC.</p>
            <h3>Uses:</h3>
            <p>This theorem is useful in problems involving distances and is used to calculate unknown lengths in triangles.</p>
            <p><a href="https://en.wikipedia.org/wiki/Stewart%27s_theorem" target="_blank">Learn more on Wikipedia</a></p>
        `
    },
    {
        name: "Archimedes' Theorem",
        details: `
            <h2>Archimedes' Theorem</h2>
            <p>Archimedes' Theorem states that the area of a circle is equal to the area of a right triangle, where the length of the base is the circumference of the circle, and the height is the radius of the circle.</p>
            <h3>Example:</h3>
            <p>For a circle with radius r, the area is given by πr². This is equal to the area of a right triangle with base 2πr (the circumference of the circle) and height r.</p>
            <h3>Uses:</h3>
            <p>This theorem is fundamental in understanding the relationship between linear and area measurements in geometry. It is particularly useful in calculus and in deriving formulas for the area of various shapes.</p>
            <p><a href="https://en.wikipedia.org/wiki/Archimedes" target="_blank">Learn more about Archimedes' Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Area Bisector Theorem",
        details: `
            <h2>Area Bisector Theorem</h2>
            <p>The Area Bisector Theorem states that in any triangle, a line that bisects the area of the triangle divides the opposite side into two segments that are proportional to the adjacent sides.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if a line segment DE bisects the area of triangle ABC, then the segments AD/DB = AE/EC.</p>
            <h3>Uses:</h3>
            <p>This theorem is used in problems involving area and proportionality, especially in triangle geometry and constructions.</p>
            <p><a href="https://en.wikipedia.org/wiki/Area_bisector_theorem" target="_blank">Learn more about the Area Bisector Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Bicentric Quadrilateral Theorem",
        details: `
            <h2>Bicentric Quadrilateral Theorem</h2>
            <p>The Bicentric Quadrilateral Theorem states that in a quadrilateral that is both cyclic (its vertices lie on a circle) and tangential (there exists an inscribed circle that touches all four sides), the sum of the opposite sides are equal.</p>
            <h3>Example:</h3>
            <p>If ABCD is a bicentric quadrilateral, then AB + CD = AD + BC.</p>
            <h3>Uses:</h3>
            <p>This theorem is used in advanced geometry, particularly in problems related to cyclic and tangential quadrilaterals.</p>
            <p><a href="https://en.wikipedia.org/wiki/Bicentric_quadrilateral" target="_blank">Learn more about the Bicentric Quadrilateral Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Binomial Theorem (in Geometry)",
        details: `
            <h2>Binomial Theorem (in Geometry)</h2>
            <p>The Binomial Theorem provides a formula for the expansion of a binomial raised to any positive integer power. In geometric terms, it can be used to determine the coefficients in the expansion of (x + y)^n, which can relate to geometric figures like parabolas or circles.</p>
            <h3>Example:</h3>
            <p>The expansion of (x + y)² = x² + 2xy + y², which can be used to calculate distances and areas in geometry.</p>
            <h3>Uses:</h3>
            <p>This theorem is fundamental in algebra and is applied in various geometric problems involving distances, areas, and volumes.</p>
            <p><a href="https://en.wikipedia.org/wiki/Binomial_theorem" target="_blank">Learn more about the Binomial Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Brahmagupta's Theorem",
        details: `
            <h2>Brahmagupta's Theorem</h2>
            <p>Brahmagupta's Theorem states that in a cyclic quadrilateral (a quadrilateral inscribed in a circle), if a perpendicular is drawn from the point of intersection of the diagonals to a side, the perpendicular bisects the opposite side.</p>
            <h3>Example:</h3>
            <p>In cyclic quadrilateral ABCD, if the diagonals AC and BD intersect at E, and F is the foot of the perpendicular from E to side AB, then F is the midpoint of CD.</p>
            <h3>Uses:</h3>
            <p>This theorem is used in problems involving cyclic quadrilaterals and has applications in both pure geometry and trigonometry.</p>
            <p><a href="https://en.wikipedia.org/wiki/Brahmagupta" target="_blank">Learn more about Brahmagupta's Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Butterfly Theorem",
        details: `
            <h2>Butterfly Theorem</h2>
            <p>The Butterfly Theorem states that if a chord is drawn through the midpoint of another chord in a circle, and if two other chords are drawn through the endpoints of the first chord, intersecting the second chord, then the segments created on the second chord are equal in length.</p>
            <h3>Example:</h3>
            <p>Given a circle with chord AB and midpoint M, if chords PQ and RS intersect AB at points X and Y, then MX = MY.</p>
            <h3>Uses:</h3>
            <p>This theorem is useful in problems related to circle geometry, especially those involving intersecting chords.</p>
            <p><a href="https://en.wikipedia.org/wiki/Butterfly_theorem" target="_blank">Learn more about the Butterfly Theorem on Wikipedia</a></p>
        `
    },
    {
        name: "Carnot's Theorem",
        details: `
            <h2>Carnot's Theorem</h2>
            <p>Carnot's Theorem states that in any triangle, the sum of the distances from the circumcenter to the sides of the triangle is equal to the sum of the radii of the excircles minus the radius of the incircle.</p>
            <h3>Example:</h3>
            <p>In triangle ABC, if R is the circumradius, r is the inradius, and r₁, r₂, r₃ are the radii of the excircles, then R = r₁ + r₂ + r₃ - r.</p>
            <h3>Uses:</h3>
            <p>This theorem is used in advanced geometry, particularly in problems involving triangle centers and circles.</p>
            <p><a href="https://en.wikipedia.org/wiki/Carnot's_theorem" target="_blank">Learn more about Carnot's Theorem on Wikipedia</a></p>
        `
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const theoremList = document.getElementById("theoremList");
    const theoremPopup = document.getElementById("theoremPopup");
    const theoremDetails = document.getElementById("theoremDetails");
    const closePopup = document.getElementById("closePopup");

    // Populate the theorem list
    theorems.forEach((theorem, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${theorem.name} <button onclick="showDetails(${index})">Details</button>`;
        theoremList.appendChild(li);
    });

    // Function to show details in a popup
    window.showDetails = function (index) {
        theoremDetails.innerHTML = theorems[index].details;
        theoremPopup.style.display = "block";
    };

    // Close the popup
    closePopup.addEventListener("click", () => {
        theoremPopup.style.display = "none";
    });

    // Close popup if clicked outside the content
    window.addEventListener("click", (event) => {
        if (event.target === theoremPopup) {
            theoremPopup.style.display = "none";
        }
    });

    // Search functionality
    document.getElementById("search").addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        theoremList.innerHTML = "";

        theorems
            .filter(theorem => theorem.name.toLowerCase().includes(searchTerm))
            .forEach((theorem, index) => {
                const li = document.createElement("li");
                li.innerHTML = `${theorem.name} <button onclick="showDetails(${index})">Details</button>`;
                theoremList.appendChild(li);
            });
    });
});
