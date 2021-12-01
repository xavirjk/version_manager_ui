export const monitorAFileInput = (e, setFile, seed) => {
  let maxsize = 1000000000;
  const Files = e.target.files;
  if (Files[0].size > maxsize) {
    alert(
      `You have selected  a big file size exceeding the maximum limit size ${
        maxsize / 1000000
      }MB `
    );
    e.target.value = null;
    setFile({ ...seed, update: [] });
    return;
  }
  setFile({ ...seed, update: Files });
};
