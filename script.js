document.getElementById('uploadButton').addEventListener('click', () => {
    const files = document.getElementById('fileInput').files;
    if (files.length === 0) {
      console.log('No files selected');
      return;
    }

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        // Asume que estás cargando las imágenes a un servidor
        // La URL debe apuntar al lugar correcto donde las imágenes serán almacenadas
        const imageUrl = `/icons/${file.name}`; // Supón que has subido las imágenes a /icons/

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: file.name,
            body: reader.result,
            userId: 1,
            imageUrl: 'icons/icono-576x1024.jpeg',// URL pública de la imagen cargada
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
      };
      reader.readAsDataURL(file);
    });
  });