"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function SellerCompanyCommunicationTab() {
  const [preferences, setPreferences] = useState({
    marketing: {
      sms: true,
      email: true,
      phone: true,
    },
    operational: {
      sms: true,
      email: false,
      phone: true,
    },
    order: {
      sms: true,
      email: true,
      phone: true,
    },
  });

  const handleToggle = (category: string, channel: string, value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [channel]: value,
      },
    }));
  };

  return (
    <div className="space-y-8">
      {/* Pazarlama Araçları */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Pazarlama Araçları</h3>
        </div>
        <p className="text-sm text-gray-600">
          tekera21 Pazaryeri'nde işinizi büyütmeniz ve geliştirmeniz için
          gönderilen Kampanya, Satıcı Mağazası, Kupon, Satıcı Paneli'ndeki
          yenilikler ve Akademi iletişimlerini kapsamaktadır.
        </p>

        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">SMS</span>
            <Switch
              checked={preferences.marketing.sms}
              onCheckedChange={(value) =>
                handleToggle("marketing", "sms", value)
              }
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">E-POSTA</span>
            <Switch
              checked={preferences.marketing.email}
              onCheckedChange={(value) =>
                handleToggle("marketing", "email", value)
              }
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">TELEFON</span>
            <Switch
              checked={preferences.marketing.phone}
              onCheckedChange={(value) =>
                handleToggle("marketing", "phone", value)
              }
            />
          </div>
        </div>
      </div>

      {/* Operasyonel */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Operasyonel</h3>
        </div>
        <p className="text-sm text-gray-600">
          tekera21 Pazaryeri'nde sürdürdüğünüz operasyon, ticari ve finansal
          süreçleriniz için gönderilen iletişimleri kapsamaktadır.
        </p>

        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">SMS</span>
            <Switch
              checked={preferences.operational.sms}
              onCheckedChange={(value) =>
                handleToggle("operational", "sms", value)
              }
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">E-POSTA</span>
            <div className="flex items-center gap-2">
              <Switch
                checked={preferences.operational.email}
                onCheckedChange={(value) =>
                  handleToggle("operational", "email", value)
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">TELEFON</span>
            <Switch
              checked={preferences.operational.phone}
              onCheckedChange={(value) =>
                handleToggle("operational", "phone", value)
              }
            />
          </div>
        </div>
      </div>

      {/* Sipariş */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Sipariş</h3>
        </div>
        <p className="text-sm text-gray-600">
          Sipariş aldığınızda tarafınıza gelen bilgilendirme iletişimlerini
          kapsamaktadır.
        </p>

        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">SMS</span>
            <Switch
              checked={preferences.order.sms}
              onCheckedChange={(value) => handleToggle("order", "sms", value)}
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">E-POSTA</span>
            <Switch
              checked={preferences.order.email}
              onCheckedChange={(value) => handleToggle("order", "email", value)}
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <span className="font-medium">TELEFON</span>
            <Switch
              checked={preferences.order.phone}
              onCheckedChange={(value) => handleToggle("order", "phone", value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
