(() => {
   console.log('The team described in this page is totally real and not at all invented for this assignment');

   let sigils = document.querySelectorAll('.iconContainer'),
      houseImages = document.querySelector('#profileImages'),
      houseBio = document.querySelector('.teamMemberInfo'),
      houseName = document.querySelector('.teamMemberName');

   const houseInfo = [
      ["Eugene Kim", `Eugene Kim was born in Seoul, South Korea, and he loves cats, baseball, books, history, movies, drawing, and travelling around the world.
      He came over to Canada in 2020 to horn up-to-date design skills in order to fulfil his true creative passion and resume his career in a creative field.
      Rather than staying in a stable place, he enjoys learning new things and never stops challenging himself to grow further. Especially he is interested in a new wave of technology such as Virtual Reality, 3D Motion Graphics, VFX, Web Development, and NFT.
      `],
      ["Deadpool", `Deadpool is a fictional character appearing in American comic books published by Marvel Comics. Deadpool, whose real name is Wade Winston Wilson, is a disfigured mercenary with the superhuman ability of regeneration and physical prowess. The character is known as the "Merc with a Mouth" because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags.
      `],
      ["Kit", `Kit is a 10-month-old brown tabby male kitten with lots of love to give! We call him “Master”. He’s got stunning spots and stripes, big beautiful brown eyes, and a belly that demands kisses. When he’s not running around playing with his mouse toys, he likes to lounge on his favourite stuffed toys or in your lap, purring himself to sleep. You won’t believe how cuddly this little guy is!.
      `]
   ];

   function animatePicture() {
      houseImages.style.right = `${this.dataset.offset * 600}px`;
      houseName.textContent = `${houseInfo[this.dataset.offset][0]}`;
      houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
   }

   sigils.forEach(sigil => sigil.addEventListener('click', animatePicture));
})();