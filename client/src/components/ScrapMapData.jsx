import React, { useState } from 'react';

function ScrapMapData() {
  const [query, setQuery] = useState('');
  const [iframeSrc, setIframeSrc] = useState('');

  const updateMap = () => {
    const encodedQuery = encodeURIComponent(query);
    setIframeSrc(`https://www.google.com/maps/search/${encodedQuery}`);
  };

  return (
    <div>
      scraping
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d112076.23059702583!2d77.12085928803106!3d28.618304933736972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scoffe%20shops%20delhi!5e0!3m2!1sen!2sin!4v1722270211213!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
      );
}

export default ScrapMapData;
