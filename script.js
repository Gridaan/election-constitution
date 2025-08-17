document.addEventListener('DOMContentLoaded', function () {
    // --- DATA STORE ---
    // All content for the page is stored in this object.
    // This makes it easy to update text or add new sections without touching the HTML.
    const content = {
        definitions: [
            { term: "Constitution", text: "In the context of our school, a constitution is a foundational and supreme document that establishes the structure, powers, and procedures of student governance. It outlines the rights and duties of student leaders and defines the relationship between student leadership and the School Administration." },
            { term: "Laws", text: "As used in this Constitution, ‘laws’ refer to all the formal rules, regulations, and policies that are enforced within the school. This includes but is not limited to the School Code of Conduct, the provisions of this Constitution, and any directives issued by the Principal or any other designated authority." },
            { term: "Head Boy and Head Girl", text: "The Head Boy and Head Girl are the senior-most student leaders of the school, typically from the final academic year (Class XII). They are elected or selected to serve as the chief student representatives." }
        ],
        eligibility: [
            { title: "General Eligibility", icon: '🎓', points: ["Bona fide student for at least two full academic years.", "Must be in the senior-most class (Class XII).", "Free from any history of serious disciplinary action."] },
            { title: "Academic Standards", icon: '📚', points: ["Maintain a consistent academic record with a minimum average score of 80%.", "Demonstrate academic diligence as a role model."] },
            { title: "Behavioral Standards", icon: '👤', points: ["Impeccable attendance and punctuality.", "Respectful, cooperative, and well-behaved.", "Subject to a confidential file review."] },
            { title: "Leadership Qualities", icon: '🌟', points: ["Strong communication and problem-solving skills.", "Demonstrable integrity, honesty, and fairness.", "Empathy and ability to connect with peers."] }
        ],
        selectionTimeline: [
            { stage: "Stage I", title: "Application & Nomination", details: "All eligible students must submit a formal application detailing their academic record, extracurricular achievements, and a personal statement outlining their vision for the school. Nominations must be supported by a minimum of one teacher and two senior students." },
            { stage: "Stage II", title: "Screening & Written Test", details: "The Selection Committee will review all applications to verify eligibility. Shortlisted candidates will then be required to take a written test that assesses their general knowledge, understanding of school values, and critical thinking skills." },
            { stage: "Stage III", title: "Interview", details: "Candidates who successfully clear the written test will be called for a formal interview with the Selection Committee. The interview will focus on their leadership qualities, communication skills, and their ability to handle real-world scenarios." },
            { stage: "Stage IV", title: "Ethical Campaigning", details: "A list of finalists will be announced. These finalists will be permitted to engage in a short, supervised campaigning period. Campaigning must be strictly regulated, free from personal attacks, and focused on the candidate’s vision and manifesto." },
            { stage: "Stage V", title: "Final Vote & Appointment", details: "A formal election will be held where all students and faculty will cast their votes. The results of this vote will be a significant, but not the sole, factor in the final decision. The Principal, in consultation with the Election Committee, retains the final authority." }
        ],
        duties: [
            { category: "Ambassadorial", icon: '🌍', details: ["Represent the school at all internal and external events.", "Deliver speeches and addresses at school functions.", "Serve as the primary liaison between students and the school administration.", "Lead school tours for visitors and new parents."] },
            { category: "Disciplinary", icon: '⚖️', details: ["Assist in maintaining order and discipline during assemblies, recess, and events.", "Lead the team of prefects and other student leaders.", "Organize and manage student rotas for various duties.", "Support faculty in administrative tasks when required."] },
            { category: "Mentorship", icon: '🤝', details: ["Be a reliable point of contact for junior students, providing guidance and support.", "Foster a supportive and inclusive school environment.", "Initiate and lead mentorship programs for junior students."] },
            { category: "Event Management", icon: '🎉', details: ["Lead the student council in planning and executing school events.", "Chair and facilitate student council meetings.", "Actively participate in various school committees."] }
        ],
        accountability: [
            { title: "Code of Conduct", content: "The Head Boy and Head Girl must conduct themselves with the highest level of integrity and honesty. They must remain impartial and never use their position for personal gain. A polite, respectful, and well-mannered demeanor is expected at all times." },
            { title: "Grounds for Disqualification", content: "A leader can be removed for: a significant drop in academic performance, any serious act of indiscipline, repeated failure to perform duties, or resignation." },
            { title: "Disciplinary Procedure", content: "In case of misconduct allegations, a fair and transparent procedure is followed. A formal complaint leads to an Inquiry Committee investigation. The student leader has the right to present their defense before the Principal makes a final, binding decision." }
        ],
        appendices: [
            { title: "Oath of Office", content: `I, [Name of student], do solemnly swear and affirm that I will, to the best of my ability, faithfully and honestly discharge the duties of the office of Head Boy/Head Girl of [School Name].<br><br>I will uphold the dignity and integrity of this office, and I will act as a true representative of the student body. I promise to be a role model for my peers, to lead by example, and to always act in the best interests of the school. I will perform my duties without any fear or favour, affection or ill-will.<br><br>I pledge my unwavering commitment to the principles enshrined in the Constitution of Student Governance and the rules and regulations of our school. I will strive to be an instrument of positive change and to contribute to the growth and prosperity of our school community.<br><br>So help me God.` },
            { title: "Parental Consent Form", content: `<strong>To:</strong> The Office of the Principal, [School Name]<br><strong>From:</strong> [Parent/Guardian's Full Legal Name]<br><br>I, [Parent/Guardian's Name], hereby declare that I have read and fully understood the ‘The Constitution of Student Governance’... I give my full and informed consent for my child, [Child’s Name], to participate in the election process... I understand that if my child is selected, they will be required to commit to their duties for the full academic year...` },
            { title: "Legal Disclaimer", content: `This document, 'The Constitution of Student Governance', is an internal administrative policy. It is for the purpose of guiding student leadership and is not intended to create any legal or contractual rights for any individual or entity... The Principal retains the sole and final authority in all matters related to student governance.` },
            { title: "Duties Checklist", content: `<table class="w-full text-left border-collapse"><thead><tr><th class="border-b p-2">Category</th><th class="border-b p-2">Duty</th><th class="border-b p-2">Status</th></tr></thead><tbody><tr><td class="border-b p-2">Ambassadorial</td><td class="border-b p-2">Represent school at major events</td><td class="border-b p-2">☐ In Progress</td></tr><tr><td class="border-b p-2">Disciplinary</td><td class="border-b p-2">Assist in maintaining school discipline</td><td class="border-b p-2">☐ In Progress</td></tr><tr><td class="border-b p-2">Mentorship</td><td class="border-b p-2">Serve as a contact for junior students</td><td class="border-b p-2">☐ In Progress</td></tr><tr><td class="border-b p-2">Event Management</td><td class="border-b p-2">Lead/assist in planning school events</td><td class="border-b p-2">☐ In Progress</td></tr></tbody></table>` }
        ]
    };

    // --- DYNAMIC CONTENT INJECTION ---
    // These functions take data from the `content` object and build the HTML.

    function populateDefinitions() {
        const container = document.getElementById('definitions-container');
        if (!container) return;
        content.definitions.forEach(def => {
            const div = document.createElement('div');
            div.innerHTML = `<details class="bg-gray-50 p-3 rounded-lg cursor-pointer"><summary class="font-semibold text-gray-700">${def.term}</summary><p class="mt-2 text-gray-600">${def.text}</p></details>`;
            container.appendChild(div);
        });
    }

    function populateEligibility() {
        const container = document.querySelector('#eligibility-container .grid');
        if (!container) return;
        content.eligibility.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow';
            let pointsHTML = item.points.map(p => `<li>${p}</li>`).join('');
            card.innerHTML = `<div class="flex items-center mb-3"><span class="text-2xl mr-3">${item.icon}</span><h4 class="text-lg font-bold text-gray-800">${item.title}</h4></div><ul class="list-disc list-inside text-gray-600 space-y-1">${pointsHTML}</ul>`;
            container.appendChild(card);
        });
    }

    function populateTimeline() {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        content.selectionTimeline.forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item relative pl-12 pb-8';
            div.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p class="text-sm font-semibold text-purple-600">${item.stage}</p>
                    <h4 class="font-bold text-gray-800 mb-1">${item.title}</h4>
                    <p class="text-gray-600">${item.details}</p>
                </div>`;
            container.appendChild(div);
        });
    }

    function populateDuties() {
        const buttonsContainer = document.getElementById('duties-tabs-buttons');
        const contentContainer = document.getElementById('duties-tabs-content');
        if (!buttonsContainer || !contentContainer) return;

        content.duties.forEach((duty, index) => {
            // Create tab button
            const button = document.createElement('button');
            button.className = `duty-tab-button text-sm font-medium py-2 px-4 -mb-px border-b-2 ${index === 0 ? 'text-purple-600 border-purple-600' : 'text-gray-500 border-transparent hover:text-purple-600 hover:border-purple-300'}`;
            button.textContent = duty.category;
            button.dataset.target = `duty-content-${index}`;
            buttonsContainer.appendChild(button);

            // Create tab content panel
            const contentDiv = document.createElement('div');
            contentDiv.id = `duty-content-${index}`;
            contentDiv.className = `duty-tab-content p-4 bg-gray-50 rounded-b-lg rounded-r-lg ${index !== 0 ? 'hidden' : ''}`;
            let detailsHTML = duty.details.map(d => `<li class="flex items-start"><span class="text-purple-500 mr-2 mt-1">✓</span><span>${d}</span></li>`).join('');
            contentDiv.innerHTML = `<ul class="space-y-2 text-gray-700">${detailsHTML}</ul>`;
            contentContainer.appendChild(contentDiv);
        });
    }

    function populateAccountability() {
        const container = document.getElementById('accountability-container');
        if (!container) return;
        content.accountability.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<details class="bg-white border border-gray-200 p-4 rounded-lg cursor-pointer shadow-sm"><summary class="font-bold text-lg text-gray-800">${item.title}</summary><p class="mt-3 text-gray-600">${item.content}</p></details>`;
            container.appendChild(div);
        });
    }

    function populateAppendices() {
        const container = document.getElementById('appendices-container');
        if (!container) return;
        content.appendices.forEach((item, index) => {
            const button = document.createElement('button');
            button.className = 'modal-button w-full text-left bg-purple-50 hover:bg-purple-100 text-purple-800 font-semibold p-6 rounded-lg shadow-sm transition-colors';
            button.textContent = item.title;
            button.dataset.index = index; // Use data attribute to link button to content
            container.appendChild(button);
        });
    }

    // --- EVENT LISTENERS AND UI LOGIC ---

    function setupTabbedInterface() {
        document.querySelectorAll('.duty-tab-button').forEach(button => {
            button.addEventListener('click', () => {
                // Reset all buttons to inactive state
                document.querySelectorAll('.duty-tab-button').forEach(btn => {
                    btn.className = 'duty-tab-button text-sm font-medium py-2 px-4 -mb-px border-b-2 text-gray-500 border-transparent hover:text-purple-600 hover:border-purple-300';
                });
                // Set clicked button to active
                button.className = 'duty-tab-button text-sm font-medium py-2 px-4 -mb-px border-b-2 text-purple-600 border-purple-600';
                // Hide all content panels
                document.querySelectorAll('.duty-tab-content').forEach(content => content.classList.add('hidden'));
                // Show the target content panel
                document.getElementById(button.dataset.target).classList.remove('hidden');
            });
        });
    }

    function setupModal() {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalClose = document.getElementById('modal-close');

        document.querySelectorAll('.modal-button').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                const item = content.appendices[index];
                modalTitle.textContent = item.title;
                modalBody.innerHTML = item.content;
                modal.style.display = 'flex';
            });
        });

        modalClose.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    function setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.content-section');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        function setActiveLink(targetId) {
            // Update nav links
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
            });
            // Update content sections
            sections.forEach(section => {
                section.classList.toggle('active', section.id === targetId);
            });
            // Hide mobile menu after selection
            mobileMenu.classList.add('hidden');
        }

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                setActiveLink(targetId);
                // Update URL hash for bookmarking
                window.history.pushState(null, null, `#${targetId}`);
            });
        });

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Set initial section based on URL hash or default to 'overview'
        const initialSection = window.location.hash ? window.location.hash.substring(1) : 'overview';
        setActiveLink(initialSection);
    }

    function createDutiesChart() {
        const ctx = document.getElementById('dutiesChart');
        if (!ctx) return;
        new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: content.duties.map(d => d.category),
                datasets: [{
                    label: 'Distribution of Duties',
                    data: [25, 25, 25, 25], // Equal distribution
                    backgroundColor: [
                        'rgba(168, 85, 247, 0.7)',
                        'rgba(139, 92, 246, 0.7)',
                        'rgba(124, 58, 237, 0.7)',
                        'rgba(109, 40, 217, 0.7)'
                    ],
                    borderColor: [
                        'rgba(168, 85, 247, 1)',
                        'rgba(139, 92, 246, 1)',
                        'rgba(124, 58, 237, 1)',
                        'rgba(109, 40, 217, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: 25%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // --- INITIALIZATION ---
    // Run all the setup functions when the page loads.
    function init() {
        populateDefinitions();
        populateEligibility();
        populateTimeline();
        populateDuties();
        populateAccountability();
        populateAppendices();
        setupTabbedInterface();
        setupModal();
        setupNavigation();
        createDutiesChart();
    }

    init();
});
