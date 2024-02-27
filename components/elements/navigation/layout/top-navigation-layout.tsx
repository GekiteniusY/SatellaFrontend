import React from "react";

// layoutはchildren必須
// children: Navigationに表示するコンポーネント
interface TopNavigationProps {
  children: React.ReactNode;
}

const TopNavigationLayout: React.FC<TopNavigationProps> = ({ children }) => {
  return (
    // TODO: CSSのレイアウトを見直して理解できるようにする
    <header>
      {/* 子要素を中央に配置　x軸padding4 y軸pading2 shadowをmdレベルで追加 */}
      <div className='items-center px-4 py-2 bg-gray-700 shadow-md'>
        <nav className='flex bg-blue-300'>{children}</nav>
      </div>
    </header>
  );
};

export default TopNavigationLayout;
