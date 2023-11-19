const wrapper = document.querySelector('.wrapper') // html etiketini çağırma class ile çağırırken "." kullan id ile çağırırken document.getElementById kullan

countries_data.sort((a, b) => b.population - a.population) // sort ile ülkelerin nüfuslarına göre büyükten küçüğe sıralamak


let ilkOnUlke = countries_data.slice(0,256) //slice ile parantez içinde ne seçildiyse yazdırma

let toplamNufus = countries_data.reduce((toplam, ulke) => toplam + ulke.population, 0) //reduce ile toplam nüfusu yazdırma


ilkOnUlke.forEach(ulke => console.log((ulke.population / toplamNufus) * 100))




    wrapper.innerHTML = ''
    ilkOnUlke.forEach(ulke => {
        let kapsayici = document.createElement('div')
        kapsayici.classList.add('kapsayici')
        let ulkeAdı = document.createElement('p')
        ulkeAdı.textContent = ulke.name
        let grafik = document.createElement('div')
        grafik.classList.add('grafik')
        let oran = document.createElement('div')
        oran.classList.add('oran')
        oran.style.width = `${Math.round((ulke.population / toplamNufus) * 100)}%`
        let ulkeNufus = document.createElement('p')
        ulkeNufus.textContent = ulke.population
        grafik.append(oran)
        kapsayici.append(ulkeAdı, grafik, ulkeNufus)
        wrapper.append(kapsayici)
    })




