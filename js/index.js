const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// change the,e
themeToggler.addEventListener('click',() => {
    document.body.classList.toggle('daark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

const Orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping:'Pending'
    },
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Refund',
        shipping:'Declined'
    },
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Paid',
        shipping:'Delivered'
    }
];

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? "danger" : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>`;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});