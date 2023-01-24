import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const dog = await getDog(id);
    const dogDetailEl = renderDogDetail(dog);

    dogDetailContainer.append(dogDetailEl);
});
