

export class Sample
{
	//! エリア番号.
	protected area_no_: number;
	//! ステージ番号.
	protected stage_no_: number;

	//! ステージ番号.
	public get StageNo(): number { return this.stage_no_; }


	/**
	 * @brief コンストラクタ.
	 */
	constructor()
	{
		this.area_no_ = 0;
		this.stage_no_ = 0;
	}
}