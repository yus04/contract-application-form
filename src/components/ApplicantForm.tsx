import { useState } from 'react';
import {
  ApplicationForm
} from '../types';

const initialState: ApplicationForm = {
  applicantType: 'individual',
  basicInfo: {
    fullName: '',
    furigana: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    myNumber: ''
  },
  contactInfo: {
    address: '',
    phone: '',
    email: '',
    mailingAddress: ''
  },
  employmentInfo: {
    occupation: '',
    employer: '',
    employerAddress: '',
    annualIncome: 0,
    yearsEmployed: 0
  },
  accountInfo: {
    accountType: '',
    transferAccount: {
      bank: '',
      branch: '',
      accountNumber: ''
    },
    usagePurpose: ''
  },
  identityVerification: {
    documentType: '',
    documentNumber: '',
    submissionMethod: ''
  },
  agreementChecks: {
    termsAccepted: false,
    antiSocialCheck: false,
    electronicDeliveryConsent: false
  }
};

export default function ApplicantForm() {
  const [form, setForm] = useState<ApplicationForm>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = (path: string, value: unknown) => {
    setForm(prev => {
      const copy: any = { ...prev };
      const keys = path.split('.');
      let cur = copy;
      keys.slice(0, -1).forEach(k => (cur = cur[k]));
      cur[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* 基本情報 */}
        <fieldset>
          <legend>基本情報</legend>
          <label>
            氏名
            <input
              required
              value={form.basicInfo.fullName}
              onChange={e => update('basicInfo.fullName', e.target.value)}
            />
          </label>
          <label>
            フリガナ
            <input
              required
              value={form.basicInfo.furigana}
              onChange={e => update('basicInfo.furigana', e.target.value)}
            />
          </label>
          <label>性別</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="男性"
                required
                checked={form.basicInfo.gender === '男性'}
                onChange={() => update('basicInfo.gender', '男性')}
              />
              男性
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="女性"
                checked={form.basicInfo.gender === '女性'}
                onChange={() => update('basicInfo.gender', '女性')}
              />
              女性
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="その他"
                checked={form.basicInfo.gender === 'その他'}
                onChange={() => update('basicInfo.gender', 'その他')}
              />
              その他
            </label>
          </div>
          <label>
            生年月日
            <input
              type="date"
              required
              value={form.basicInfo.dateOfBirth}
              onChange={e => update('basicInfo.dateOfBirth', e.target.value)}
            />
          </label>
          <label>
            国籍
            <input
              required
              value={form.basicInfo.nationality}
              onChange={e => update('basicInfo.nationality', e.target.value)}
            />
          </label>
          <label>
            マイナンバー
            <input
              required
              value={form.basicInfo.myNumber}
              onChange={e => update('basicInfo.myNumber', e.target.value)}
            />
          </label>
        </fieldset>

        {/* 連絡先情報 */}
        <fieldset>
          <legend>連絡先情報</legend>
          <label>
            住所
            <input
              required
              value={form.contactInfo.address}
              onChange={e => update('contactInfo.address', e.target.value)}
            />
          </label>
          <label>
            電話番号
            <input
              required
              value={form.contactInfo.phone}
              onChange={e => update('contactInfo.phone', e.target.value)}
            />
          </label>
          <label>
            メールアドレス
            <input
              required
              type="email"
              value={form.contactInfo.email}
              onChange={e => update('contactInfo.email', e.target.value)}
            />
          </label>
          <label>
            郵送先
            <input
              value={form.contactInfo.mailingAddress}
              onChange={e => update('contactInfo.mailingAddress', e.target.value)}
            />
          </label>
        </fieldset>

        {/* 就業情報 */}
        <fieldset>
          <legend>就業情報</legend>
          <label>
            職業
            <input
              value={form.employmentInfo.occupation}
              onChange={e => update('employmentInfo.occupation', e.target.value)}
            />
          </label>
          <label>
            勤務先
            <input
              value={form.employmentInfo.employer}
              onChange={e => update('employmentInfo.employer', e.target.value)}
            />
          </label>
          <label>
            勤務先住所
            <input
              value={form.employmentInfo.employerAddress}
              onChange={e => update('employmentInfo.employerAddress', e.target.value)}
            />
          </label>
          <label>
            年収
            <input
              type="number"
              value={form.employmentInfo.annualIncome}
              onChange={e => update('employmentInfo.annualIncome', Number(e.target.value))}
            />
          </label>
          <label>
            勤続年数
            <input
              type="number"
              value={form.employmentInfo.yearsEmployed}
              onChange={e => update('employmentInfo.yearsEmployed', Number(e.target.value))}
            />
          </label>
        </fieldset>

        {/* 口座情報 */}
        <fieldset>
          <legend>口座情報</legend>
          <label>
            口座種別
            <input
              value={form.accountInfo.accountType}
              onChange={e => update('accountInfo.accountType', e.target.value)}
            />
          </label>
          <label>
            金融機関
            <input
              value={form.accountInfo.transferAccount.bank}
              onChange={e => update('accountInfo.transferAccount.bank', e.target.value)}
            />
          </label>
          <label>
            支店
            <input
              value={form.accountInfo.transferAccount.branch}
              onChange={e => update('accountInfo.transferAccount.branch', e.target.value)}
            />
          </label>
          <label>
            口座番号
            <input
              value={form.accountInfo.transferAccount.accountNumber}
              onChange={e => update('accountInfo.transferAccount.accountNumber', e.target.value)}
            />
          </label>
          <label>
            使途
            <input
              value={form.accountInfo.usagePurpose}
              onChange={e => update('accountInfo.usagePurpose', e.target.value)}
            />
          </label>
        </fieldset>

        {/* 本人確認 */}
        <fieldset>
          <legend>本人確認</legend>
          <label>
            書類種別
            <input
              value={form.identityVerification.documentType}
              onChange={e => update('identityVerification.documentType', e.target.value)}
            />
          </label>
          <label>
            書類番号
            <input
              value={form.identityVerification.documentNumber}
              onChange={e => update('identityVerification.documentNumber', e.target.value)}
            />
          </label>
          <label>
            提出方法
            <input
              value={form.identityVerification.submissionMethod}
              onChange={e => update('identityVerification.submissionMethod', e.target.value)}
            />
          </label>
        </fieldset>

        {/* 同意事項 */}
        <fieldset>
          <legend>同意事項</legend>
          <label>
            <input
              type="checkbox"
              checked={form.agreementChecks.termsAccepted}
              onChange={e => update('agreementChecks.termsAccepted', e.target.checked)}
            />
            利用規約に同意する
          </label>
          <label>
            <input
              type="checkbox"
              checked={form.agreementChecks.antiSocialCheck}
              onChange={e => update('agreementChecks.antiSocialCheck', e.target.checked)}
            />
            反社会的勢力ではありません
          </label>
          <label>
            <input
              type="checkbox"
              checked={form.agreementChecks.electronicDeliveryConsent}
              onChange={e =>
                update('agreementChecks.electronicDeliveryConsent', e.target.checked)
              }
            />
            電子交付に同意する
          </label>
        </fieldset>

        <button type="submit">送信</button>
      </form>

      {submitted && (
        // 送信完了メッセージを表示
        <p role="alert" style={{ color: 'green', fontWeight: 600 }}>
          契約申込書の送信が完了しました。ご入力ありがとうございました。
        </p>
      )}
    </>
  );
}