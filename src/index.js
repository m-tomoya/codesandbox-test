import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、からにする
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = inputText;

  // COMPLETE BUTTON タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETE";
  completeButton.addEventListener("click", () => {
    alert("COMPLETE");
  });

  // DELETE BUTTON タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incompleted-list").removeChild(deleteTarget);
  });

  console.log(li);

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  document.getElementById("incompleted-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
